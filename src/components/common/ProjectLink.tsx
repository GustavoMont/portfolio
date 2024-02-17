import React from "react";
import UnderlinedLink from "src/styles/common/UnderlinedLink";
import { ButtonText } from "src/styles/Typograph";
import { CodeIcon, GithubIcon } from "../icons";

type linkType = "deploy" | "github";

interface ProjectLinkProps {
  linkType: linkType;
  href?: string;
}

interface LinkTypeHandler {
  icon: JSX.Element;
  text: string;
}

function ProjectLink(props: ProjectLinkProps) {
  const linkTypeHandler = linkTypeHandlerFactory(props.linkType);

  function linkTypeHandlerFactory(type: linkType): LinkTypeHandler {
    switch (type) {
      case "deploy":
        return {
          icon: <CodeIcon />,
          text: "Confira aqui",
        };
      case "github":
        return {
          icon: <GithubIcon />,
          text: "Saiba mais",
        };
      default:
        return {
          icon: <React.Fragment />,
          text: "",
        };
    }
  }
  if (!props.href) {
    return <React.Fragment />;
  }
  return (
    <UnderlinedLink
      target={"_blank"}
      lineColor="primary"
      href={props.href || ""}
    >
      <div className="flex items-center justify-center gap-2 align-middle link">
        <div>{linkTypeHandler.icon}</div>
        <ButtonText className="mt-0.5">{linkTypeHandler.text}</ButtonText>
      </div>
    </UnderlinedLink>
  );
}

export default ProjectLink;
