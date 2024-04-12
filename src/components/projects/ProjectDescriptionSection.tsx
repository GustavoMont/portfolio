import Markdown from "markdown-to-jsx";
import React from "react";
import { LinkButton } from "src/styles/Button";
import { H2 } from "src/styles/Typograph";
import { BREAKPOINTS } from "src/styles/constants/breaking-points-styles.constants";
import styled from "styled-components";

type Props = {
  title: string;
  description: string;
  url?: string;
};

export const ProjectDescriptionSection: React.FC<Props> = ({
  description,
  title,
  url,
}) => {
  return (
    <Section>
      <H2 color="primary">{title}</H2>
      <p>
        <Markdown>{description}</Markdown>
      </p>
      {url ? (
        <LinkButton
          href={url}
          target="_blank"
          border="fill"
          color="primary"
          rounded="default"
        >
          Acessar Projeto
        </LinkButton>
      ) : null}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  p strong {
    color: ${({ theme: { colors } }) => colors.primary};
  }
  h2 {
    display: none;
    @media (min-width: ${BREAKPOINTS.md}) {
      display: block;
      align-self: self-start;
    }
  }
`;
