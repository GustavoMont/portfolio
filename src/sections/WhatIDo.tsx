import React from "react";
import { CodeIcon } from "src/components/icons";
import ServicesCard from "src/components/ServicesCard";
import Service from "src/models/Service";
import FlexContainer from "src/styles/common/FlexContainer";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { H5 } from "src/styles/Typograph";

export default function WhatIDo() {
  const servicesCard: Service[] = [
    {
      title: "Construção de Sites",
      iconUrl: "/code-icon.svg",
      explain:
        "Construo desde landing pages simples até mesmo blogs e sites mais robustos. Sempre com as melhores práticas de SEO, responsividade e fidelidade aos designs de prototipação",
    },
    {
      title: "Construção de Designs",
      iconUrl: "ui-icon.svg",
      explain:
        "Faço também o design de telas de sites e aplicativos móveis. Passo por todo processo de prototipação de baixa fidelidade até o design final que transmita com fidelidade sua marca. ",
    },
  ];

  function renderCard(service: Service, i: number) {
    return <ServicesCard {...service} key={i} />;
  }

  return (
    <Layout id="o-que-faco">
      <GridContainer className="gap-y-8 items-center h-full">
        <div className="col-start-1 col-span-3 mt-4 md:col-span-5">
          <H5 className="text-primary md:text-heading-3">O que faço</H5>
        </div>
        <div className="col-start-1 col-end-4 md:col-start-3 md:col-end-10">
          <FlexContainer className="md:py-20">
            {servicesCard.map(renderCard)}
          </FlexContainer>
        </div>
      </GridContainer>
    </Layout>
  );
}
