import React from "react";
import Button from "src/styles/Button";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { ButtonText, H5, Subtitle } from "src/styles/Typograph";

export default function Apresentation() {
  return (
    <Layout>
      <GridContainer>
        <div className="col-start-1 col-end-4 w-full mt-11">
          <H5>
            Olá, Sou o<span className="text-primary"> Gustavo</span>
          </H5>
          <Subtitle>Desenvolvedor Web</Subtitle>
          <div className="flex justify-center">
            <Button
              border="fill"
              color="primary"
              rounded="pill"
              className="mt-9"
            >
              <ButtonText className="leading-none">Contate-me</ButtonText>
            </Button>
          </div>
        </div>
      </GridContainer>
    </Layout>
  );
}
