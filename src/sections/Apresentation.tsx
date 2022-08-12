/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GmailIcon, LinkedinIcon } from "src/components/icons";
import Button from "src/styles/Button";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { ButtonText, H5, Subtitle } from "src/styles/Typograph";
import ManImage from "/public/man-sit-desk.svg";

export default function Apresentation() {
  return (
    <Layout className="flex items-center">
      <GridContainer className="items-center">
        <div className="col-start-1 col-end-4 w-full mt-11 md:col-start-1 md:col-end-7">
          <H5 className="md:text-heading-4 md:tracking-heading-2 md:font-light">
            Olá, Sou o<span className="text-primary"> Gustavo</span>
          </H5>
          <Subtitle className="md:text-heading-5 md:tracking-heading-4">
            Desenvolvedor Web
          </Subtitle>
          <div className="flex justify-center">
            <Button
              border="fill"
              color="primary"
              rounded="pill"
              className="mt-9"
            >
              <ButtonText className="leading-none md:text-subtitle md:font-poppins">
                Contate-me
              </ButtonText>
            </Button>
          </div>
        </div>
        <div className="col-start-1 col-end-4 mt-10 md:mt-0 md:col-start-8 md:col-end-13">
          <img
            src={"man-sit-desk.svg"}
            alt="Main Image"
            className="w-10/12 mx-auto"
          />
        </div>
        <div className="col-start-1 col-end-4 w-full text-white flex justify-center gap-6 md:col-start-1 md:col-end-7">
          <LinkedinIcon />
          <GmailIcon />
        </div>
      </GridContainer>
    </Layout>
  );
}
