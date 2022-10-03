import React from "react";
import { CodeIcon } from "src/components/icons";
import ServicesCard from "src/components/common/ServicesCard";
import Service from "src/models/Service";
import FlexContainer from "src/styles/common/FlexContainer";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { H5 } from "src/styles/Typograph";
import TechCarousel from "src/components/common/TechCarousel";

interface WhatIDoProps {
  services: Service[];
}

export default function WhatIDo({ services }: WhatIDoProps) {
  function renderCard(service: Service, i: number) {
    return <ServicesCard {...service} key={i} isOdd={i % 2 === 0} />;
  }

  return (
    <Layout id="o-que-faco">
      <GridContainer className="gap-y-8 items-center h-full border border-white">
        <div className="col-start-1 col-span-3 mt-4 md:col-span-5">
          <H5 className="text-primary md:text-heading-3">O que faço</H5>
        </div>
        <div className="col-start-1 col-end-4 md:col-start-1 md:col-end-13 lg:col-start-3 lg:col-end-11">
          <FlexContainer className="md:py-4">
            {services.map(renderCard)}
          </FlexContainer>
        </div>
        <div className="w-full col-span-12">
          <TechCarousel />
        </div>
      </GridContainer>
    </Layout>
  );
}
