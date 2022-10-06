import React, { useState } from "react";
import Project from "src/models/Project";
import ProjectCard from "src/styles/common/ProjectCard";
import { BodyText, H5 } from "src/styles/Typograph";

interface ProjectComponentProps extends Project {}

function ProjectComponent(props: ProjectComponentProps) {
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);

  return (
    <ProjectCard
      thumbnail={props.thumbnail.url}
      isDescriptionActive={isDescriptionActive}
      onClick={() => {
        setIsDescriptionActive(!isDescriptionActive);
      }}
      onMouseEnter={() => setIsDescriptionActive(true)}
      onMouseLeave={() => setIsDescriptionActive(false)}
    >
      <div className="container overlay title">
        <div>
          <H5>{props.title}</H5>
        </div>
      </div>
      <div className="container description overlay">
        <div>
          <BodyText>{props.description}</BodyText>
        </div>
      </div>
    </ProjectCard>
  );
}

export default ProjectComponent;
