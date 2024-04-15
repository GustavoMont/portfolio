import React, { useState } from "react";
import Project from "src/models/Project";
import ProjectCard from "src/styles/common/ProjectCard";
import { H5 } from "src/styles/Typograph";
import ProjectLink from "./ProjectLink";
import Markdown from "markdown-to-jsx";

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
          <Markdown>{project.description}</Markdown>
        </div>
        <div className="links">
          <ProjectLink
            isInternal
            linkType="more-info"
            href={`/projetos/${project.id}`}
          />
        </div>
      </div>
    </ProjectCard>
  );
}

export default ProjectComponent;
