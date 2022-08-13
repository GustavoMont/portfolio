import React from "react";
import Button from "src/styles/Button";
import FlexContainer from "src/styles/common/FlexContainer";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { ButtonText, H5 } from "src/styles/Typograph";

interface Project {
  title: string;
  url: string;
  bannerUrl: string;
}

export default function Portfolio() {
  const projects: Project[] = [];
  return (
    <Layout id="portfolio">
      <GridContainer className="justify-center gap-y-6">
        <div className="col-start-1 col-span-4">
          <H5 className="text-primary">Meus trabalhos:</H5>
        </div>
        <div className="col-start-1 col-end-4 justify-self-center">
          <FlexContainer>
            {projects.map((project, i) => (
              <div key={i}>{project.title}</div>
            ))}
          </FlexContainer>
        </div>
        <div className="col-start-1 col-end-4 justify-self-center">
          <Button border="outlined" color="secondary" rounded="pill">
            <ButtonText>Ver mais projetos</ButtonText>
          </Button>
        </div>
      </GridContainer>
    </Layout>
  );
}
