/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "src/styles/common/Layout";
import { H3, Span } from "src/styles/Typograph";
import SectionObserver from "src/components/common/SectionObserver";
import { WhoAmISection } from "src/styles/sections/WhoAmISection.style";
import { parseToHtml } from "src/functions/parseToHtml";

interface WhoIAmProps {
  mainText: string;
}

export default function WhoAmI({ mainText }: WhoIAmProps) {
  return (
    <Layout id="quem-sou">
      <WhoAmISection>
        <div className="image-container">
          <img data-aos="fade-up" src="appreciate.svg" alt="Apreciatte image" />
        </div>
        <div className="content">
          <div>
            <div data-aos="fade-down">
              <H3>
                Muito prazer, sou {""}
                <Span color="primary">Gustavo Monteiro 👋</Span>
              </H3>
            </div>
            <SectionObserver href="#quem-sou">
              <div data-aos="fade-right" className="about-me">
                <span
                  dangerouslySetInnerHTML={{
                    __html: parseToHtml(mainText),
                  }}
                />
              </div>
            </SectionObserver>
          </div>
        </div>
      </WhoAmISection>
    </Layout>
  );
}
