import { GetServerSideProps } from "next";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "src/components/common/Breadcrumb";
import { PageCover } from "src/components/common/PageCover";
import { ProjectDescriptionSection } from "src/components/projects/ProjectDescriptionSection";
import { ProjectLayout } from "src/components/projects/ProjectLayout";
import { getProject } from "src/data/services/projects.services";
import Project from "src/models/Project";
import { H2 } from "src/styles/Typograph";

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
          alt: project.thumbnail.alt,
          src: project.thumbnail.url,
        }}
      >
        {projectInfo}
      </PageCover>
      {projectInfo}
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
