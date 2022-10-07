import React from "react";
import ProjectComponent from "src/components/common/ProjectComponent";
import Project from "src/models/Project";
import Button from "src/styles/Button";
import FlexContainer from "src/styles/common/FlexContainer";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { ButtonText, H5 } from "src/styles/Typograph";

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
        <div className="col-start-1 col-end-4 md:col-span-12 justify-self-center w-full">
          <FlexContainer>
            {projects.map((project, i) => (
              <ProjectComponent {...project} key={project.id} />
            ))}
          </FlexContainer>
        </div>
        <div className="col-start-1 col-end-4 md:col-span-12 justify-self-center">
          <Button
            border="outlined"
            color="secondary"
            rounded="pill"
            hoverColor="white"
          >
            <ButtonText>Ver mais projetos</ButtonText>
          </Button>
        </div>
      </GridContainer>
    </Layout>
  );
}
