import React from "react";
import UnderlinedLink from "src/styles/common/UnderlinedLink";
import { CodeIcon, GithubIcon } from "../icons";

type LinkType = "deploy" | "github" | "more-info";

interface ProjectLinkProps {
  linkType: LinkType;
  href?: string;
  isInternal?: boolean;
}

interface LinkContent {
  icon: JSX.Element;
  text: string;
}

type LinkHandler = {
  [key in LinkType]: LinkContent;
};

function ProjectLink({ linkType, href, isInternal = false }: ProjectLinkProps) {
  const linkTypeHandler: LinkHandler = {
    deploy: {
      icon: <CodeIcon />,
      text: "Confira aqui",
    },
    github: {
      icon: <GithubIcon />,
      text: "Saiba mais",
    },
    "more-info": {
      icon: <CodeIcon />,
      text: "Ver mais",
    },
  };
  const linkContent = linkTypeHandler[linkType];

  if (!href) {
    return <React.Fragment />;
  }
  return (
    <UnderlinedLink
      className="project-link link"
      target={isInternal ? undefined : "_blank"}
      lineColor="primary"
      href={href || ""}
    >
      {linkContent.icon}
      {linkContent.text}
    </UnderlinedLink>
  );
}

export default ProjectLink;
