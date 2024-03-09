import React from "react";
import ProjectComponent from "src/components/common/ProjectComponent";
import Project from "src/models/Project";
import FlexContainer from "src/styles/common/FlexContainer";
import Layout from "src/styles/common/Layout";
import { H3 } from "src/styles/Typograph";
import SectionObserver from "src/components/common/SectionObserver";
import { PortfolioSection } from "src/styles/sections/Portfolio.style";

interface PortfolioProps {
  projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <Layout isNotScreenHeight id="portfolio">
      <PortfolioSection className="justify-center gap-y-6">
        <H3 className="text-primary">Meus trabalhos:</H3>
        <SectionObserver href="#portfolio">
          <FlexContainer className="project-list">
            {projects.map((project) => (
              <ProjectComponent project={project} key={project.id} />
            ))}
          </FlexContainer>
        </SectionObserver>
      </PortfolioSection>
    </Layout>
  );
}
