/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { IconButton } from "src/components/common/IconButton";
import SectionObserver from "src/components/common/SectionObserver";
import Gmail from "src/components/SocialMedia/Gmail";
import Linkedin from "src/components/SocialMedia/Linkedin";
import Button from "src/styles/Button";
import Layout from "src/styles/common/Layout";
import { ApresentationSection } from "src/styles/sections/ApresentationSection.style";
import { H2, H3, Span } from "src/styles/Typograph";

export default function Apresentation() {
  const router = useRouter();
  return (
    <Layout>
      <ApresentationSection>
        <div data-aos="fade-up" className="main-info">
          <H2 data-aos="fade-up">
            Olá, Sou o<Span color="primary"> Gustavo</Span>
          </H2>

          <SectionObserver href="">
            <H3
              data-aos="fade-left"
              className="md:text-heading-5 md:tracking-heading-4"
            >
              Desenvolvedor Web
            </H3>
          </SectionObserver>

          <Button
            data-aos="fade-up"
            border="fill"
            color="primary"
            rounded="pill"
            hoverColor="white"
            onClick={() => router.push("#contatos")}
          >
            Contate-me
          </Button>
        </div>

        <img
          data-aos="fade-up"
          src={"man-sit-desk.svg"}
          alt="Main Image"
          className="w-10/12 mx-auto motion-safe:animate-bounce-slow"
        />
        <div className="social-media col-start-1 col-end-4 w-full flex justify-center gap-6 md:col-start-1 md:col-end-7">
          <IconButton aria-label="ir para linkedin">
            <Linkedin />
          </IconButton>
          <IconButton aria-label="entrar em contato por e-mail">
            <Gmail />
          </IconButton>
        </div>
      </ApresentationSection>
    </Layout>
  );
}
