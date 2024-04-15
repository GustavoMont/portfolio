import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "src/components/common/Breadcrumb";
import { GalleryList } from "src/components/common/Gallery";
import { PageCover } from "src/components/common/PageCover";
import { ProjectDescriptionSection } from "src/components/projects/ProjectDescriptionSection";
import { ProjectLayout } from "src/components/projects/ProjectLayout";
import { getProject } from "src/data/services/projects.services";
import Project from "src/models/Project";
import { H2, H3 } from "src/styles/Typograph";

type Props = {
  project: Project;
};

function Projetos({ project }: Props) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/#portfolio",
      text: "Portifolio",
    },
    {
      href: "/projetos",
      text: project.title,
    },
  ];

  const projectInfo = (
    <ProjectDescriptionSection
      description={project.description}
      title={project.title}
      url={project.deployLink}
    />
  );
  return (
    <ProjectLayout>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <H2 color="primary">{project.title}</H2>
      <PageCover
        className="hero"
        imageData={{
          alt: project.thumbnail.alt ?? `capa do projeto ${project.title}`,
          src: project.thumbnail.url,
        }}
      >
        {projectInfo}
      </PageCover>
      {projectInfo}
      <section id="gallery">
        {project.gallery.length ? <H3 color="secondary">Galeria</H3> : <></>}
        <GalleryList>
          {project.gallery.map((image) => (
            <li
              style={{ position: "relative", width: "100%", height: "200px" }}
              key={image.id}
            >
              <Image alt={image.alt} src={image.url} fill />
            </li>
          ))}
        </GalleryList>
      </section>
    </ProjectLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = Array.isArray(context.params?.id)
      ? context.params?.id.at(0)
      : context.params?.id;
    const project = await getProject(id ?? "");

    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};

export default Projetos;
