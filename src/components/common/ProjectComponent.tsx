import Link from "next/link";
import React, { useRef, useState } from "react";
import textFormatter from "src/functions/textFormatter";
import Project from "src/models/Project";
import ProjectCard from "src/styles/common/ProjectCard";
import { BodyText, ButtonText, H5 } from "src/styles/Typograph";
import ProjectLink from "./ProjectLink";

interface ProjectComponentProps extends Project {}

function ProjectComponent(props: ProjectComponentProps) {
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const linkRef = useRef(null);
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
          <ProjectLink linkType="deploy" href={props.deployLink} />
          <ProjectLink linkType="github" href={props.githubLink} />
        </div>
      </div>
    </ProjectCard>
  );
}

export default ProjectComponent;
