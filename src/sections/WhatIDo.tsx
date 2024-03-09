import React from "react";
import SectionObserver from "src/components/common/SectionObserver";
import ServicesCard from "src/components/common/ServicesCard";
import Service from "src/models/Service";
import FlexContainer from "src/styles/common/FlexContainer";
import Layout from "src/styles/common/Layout";
import { WhatIDoSection } from "src/styles/sections/WhatIDoSection.style";
import { H3 } from "src/styles/Typograph";
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
      <WhatIDoSection>
        <H3>O que faço</H3>
        <SectionObserver href="#o-que-faco">
          <FlexContainer className="service-list">
            {services.map(renderCard)}
          </FlexContainer>
        </SectionObserver>
      </WhatIDoSection>
    </Layout>
  );
}
