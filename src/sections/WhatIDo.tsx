import React from "react";
import SectionObserver from "src/components/common/SectionObserver";
import ServicesCard from "src/components/common/ServicesCard";
import Service from "src/models/Service";
import FlexContainer from "src/styles/common/FlexContainer";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { WhatIDoSection } from "src/styles/sections/WhatIDoSection.style";
import { H3, H5 } from "src/styles/Typograph";
interface WhatIDoProps {
  services: Service[];
}

export default function WhatIDo({ services }: WhatIDoProps) {
  function renderCard(service: Service, i: number) {
    return (
      <ServicesCard service={service} key={service.title} isOdd={i % 2 === 0} />
    );
  }
  return (
    <Layout isNotScreenHeight id="o-que-faco">
      <WhatIDoSection className="gap-y-8 items-center h-full">
        <H3 className="text-primary md:text-heading-3">O que faço</H3>
        <SectionObserver href="#o-que-faco">
          <div className="col-start-1 col-end-4 md:col-start-1 md:col-end-13 lg:col-start-3 lg:col-end-11">
            <FlexContainer className="md:py-4">
              {services.map(renderCard)}
            </FlexContainer>
          </div>
        </SectionObserver>
      </WhatIDoSection>
    </Layout>
  );
}
