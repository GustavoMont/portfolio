import React from "react";
import UnderlinedLink from "src/styles/common/UnderlinedLink";
import { ButtonText } from "src/styles/Typograph";
import { CodeIcon, GithubIcon } from "../icons";

type LinkType = "deploy" | "github";

interface ProjectLinkProps {
  linkType: LinkType;
  href?: string;
}

interface LinkContent {
  icon: JSX.Element;
  text: string;
}

type LinkHandler = {
  [key in LinkType]: LinkContent;
};

function ProjectLink({ linkType, href }: ProjectLinkProps) {
  const linkTypeHandler: LinkHandler = {
    deploy: {
      icon: <CodeIcon />,
      text: "Confira aqui",
    },
    github: {
      icon: <GithubIcon />,
      text: "Saiba mais",
    },
  };
  const linkContent = linkTypeHandler[linkType];

  if (!href) {
    return <React.Fragment />;
  }
  return (
    <UnderlinedLink
      className="project-link link"
      target={"_blank"}
      lineColor="primary"
      href={href || ""}
    >
      <div>{linkContent.icon}</div>
      <ButtonText className="mt-0.5">{linkContent.text}</ButtonText>
    </UnderlinedLink>
  );
}

export default ProjectLink;
