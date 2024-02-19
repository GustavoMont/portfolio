/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { IconButton } from "src/components/common/IconButton";
import SectionObserver from "src/components/common/SectionObserver";
import Gmail from "src/components/SocialMedia/Gmail";
import Linkedin from "src/components/SocialMedia/Linkedin";
import Button from "src/styles/Button";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { ButtonText, H5, Subtitle } from "src/styles/Typograph";

export default function Apresentation() {
  const router = useRouter();
  return (
    <Layout className="flex items-center">
      <GridContainer className="items-center">
        <div className="col-start-1 col-end-4 w-full mt-11 md:col-start-1 md:col-end-7">
          <div data-aos="fade-up">
            <H5 className="md:text-heading-4 md:tracking-heading-2 md:font-light">
              Olá, Sou o<span className="text-primary"> Gustavo</span>
            </H5>
          </div>
          <div>
            <SectionObserver href="">
              <div data-aos="fade-left">
                <Subtitle className="md:text-heading-5 md:tracking-heading-4">
                  Desenvolvedor Web
                </Subtitle>
              </div>
            </SectionObserver>
          </div>
          <div className="flex justify-center">
            <Button
              border="fill"
              color="primary"
              rounded="pill"
              className="mt-9"
              hoverColor="white"
              onClick={() => router.push("#contatos")}
            >

                Contate-me
            </Button>
          </div>
        </div>
        <div className="col-start-1 col-end-4 mt-10 md:mt-0 md:col-start-8 md:col-end-13">
          <img
            data-aos="fade-right"
            src={"man-sit-desk.svg"}
            alt="Main Image"
            className="w-10/12 mx-auto motion-safe:animate-bounce-slow"
          />
        </div>
        <div className="col-start-1 col-end-4 w-full flex justify-center gap-6 md:col-start-1 md:col-end-7">
          <IconButton aria-label="ir para linkedin" >
            <Linkedin />
          </IconButton>
          <IconButton aria-label="entrar em contato por e-mail" >
            <Gmail />
          </IconButton>
        </div>
      </GridContainer>
    </Layout>
  );
}
