import React, { useState } from "react";
import textFormatter from "src/functions/textFormatter";
import Project from "src/models/Project";
import PressableItem from "src/styles/common/PressableItem";
import ProjectCard from "src/styles/common/ProjectCard";
import { BodyText, H5 } from "src/styles/Typograph";
import ProjectLink from "./ProjectLink";

interface ProjectComponentProps extends Project {}

function ProjectComponent(props: ProjectComponentProps) {
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  return (
    <ProjectCard
      thumbnail={props.thumbnail.url}
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
          <H5>{props.title}</H5>
        </div>
      </div>
      <div className="container description overlay">
        <div className="text">
          <BodyText>
            <span
              dangerouslySetInnerHTML={{
                __html: textFormatter(props.description),
              }}
            />
          </BodyText>
        </div>
        <div className="links">
          <PressableItem>
            <ProjectLink linkType="deploy" href={props.deployLink} />
          </PressableItem>
          <PressableItem>
            <ProjectLink linkType="github" href={props.githubLink} />
          </PressableItem>
        </div>
      </div>
    </ProjectCard>
  );
}

export default ProjectComponent;
