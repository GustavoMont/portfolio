import React, { useState } from "react";
import textFormatter from "src/functions/textFormatter";
import Project from "src/models/Project";
import ProjectCard from "src/styles/common/ProjectCard";
import { BodyText, H5 } from "src/styles/Typograph";
import ProjectLink from "./ProjectLink";

interface ProjectComponentProps {
  project: Project;
}

function ProjectComponent({ project }: ProjectComponentProps) {
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  return (
    <ProjectCard
      className="project"
      thumbnail={project.thumbnail.url}
      isDescriptionActive={isDescriptionActive}
      onClick={(e) => {
        e.stopPropagation();
        setIsDescriptionActive(!isDescriptionActive);
      }}
      onMouseEnter={() => setIsDescriptionActive(true)}
      onMouseLeave={() => setIsDescriptionActive(false)}
    >
      <div className="container overlay title">
        <div>
          <H5>{project.title}</H5>
        </div>
      </div>
      <div className="container description overlay">
        <div className="text">
          <BodyText>
            <span
              dangerouslySetInnerHTML={{
                __html: textFormatter(project.description),
              }}
            />
          </BodyText>
        </div>
        <div className="links">
          <>
            <ProjectLink linkType="deploy" href={project.deployLink} />
          </>
          <>
            <ProjectLink linkType="github" href={project.githubLink} />
          </>
        </div>
      </div>
    </ProjectCard>
  );
}

export default ProjectComponent;
