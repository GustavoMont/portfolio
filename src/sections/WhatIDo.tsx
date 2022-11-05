import useSection from "data/hooks/useSection";
import React, { useEffect, useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import SectionObserver from "src/components/common/SectionObserver";
import ServicesCard from "src/components/common/ServicesCard";
import Service from "src/models/Service";
import FlexContainer from "src/styles/common/FlexContainer";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { H5 } from "src/styles/Typograph";
interface WhatIDoProps {
  services: Service[];
}

export default function WhatIDo({ services }: WhatIDoProps) {
  function renderCard(service: Service, i: number) {
    return <ServicesCard {...service} key={i} isOdd={i % 2 === 0} />;
  }
  return (
    <Layout id="o-que-faco">
      <GridContainer className="gap-y-8 items-center h-full">
        <div className="col-start-1 col-span-3 mt-4 md:col-span-5">
          <H5 className="text-primary md:text-heading-3">O que faço</H5>
        </div>
        <SectionObserver href="#o-que-faco">
          <div className="col-start-1 col-end-4 md:col-start-1 md:col-end-13 lg:col-start-3 lg:col-end-11">
            <FlexContainer className="md:py-4">
              {services.map(renderCard)}
            </FlexContainer>
          </div>
        </SectionObserver>
      </GridContainer>
    </Layout>
  );
}
