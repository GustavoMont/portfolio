import React from "react";
import ProjectComponent from "src/components/common/ProjectComponent";
import Project from "src/models/Project";
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
      <PortfolioSection>
        <H3>Meus trabalhos:</H3>
        <SectionObserver href="#portfolio">
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectComponent project={project} />
              </li>
            ))}
          </ul>
        </SectionObserver>
      </PortfolioSection>
    </Layout>
  );
}
