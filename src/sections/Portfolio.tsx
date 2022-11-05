import React from "react";
import ProjectComponent from "src/components/common/ProjectComponent";
import Project from "src/models/Project";
import FlexContainer from "src/styles/common/FlexContainer";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { H5 } from "src/styles/Typograph";
import SectionObserver from "src/components/common/SectionObserver";
import ReactVisibilitySensor from "react-visibility-sensor";
import useSection from "data/hooks/useSection";

interface PortfolioProps {
  projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <Layout id="portfolio">
      <GridContainer className="justify-center gap-y-6">
        <div className="col-start-1 col-span-4">
          <H5 className="text-primary">Meus trabalhos:</H5>
        </div>
        <SectionObserver href="#portfolio">
          <div className="col-start-1 col-end-4 md:col-span-12 justify-self-center w-full">
            <FlexContainer>
              {projects.map((project, i) => (
                <ProjectComponent {...project} key={project.id} />
              ))}
            </FlexContainer>
          </div>
        </SectionObserver>
      </GridContainer>
    </Layout>
  );
}
