/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "src/styles/common/Layout";
import { Caption, H3, H5, Span } from "src/styles/Typograph";
import textFormatter from "src/functions/textFormatter";
import SectionObserver from "src/components/common/SectionObserver";
import GridContainer from "src/styles/common/GridContainer";
import { WhoAmISection } from "src/styles/sections/WhoAmISection.style";

interface WhoIAmProps {
  mainText: string;
}

export default function WhoAmI({ mainText }: WhoIAmProps) {
  return (
    <Layout id="quem-sou" className="flex items-center">
      <WhoAmISection className="h-full items-center">
        <div className="image-container col-start-1 col-span-3  md:col-span-5">
          <img
            data-aos="fade-up"
            src="appreciate.svg"
            alt="Apreciatte image"
            className="w-8/12 mx-auto"
          />
        </div>
        <div className="content col-start-1 col-span-3 md:col-start-6 md:col-span-7 mt-6">
          <div className="w-full">
            <div data-aos="fade-down">
              <H3>
                Muito prazer, sou {""}
                <Span color="primary">Gustavo Monteiro 👋</Span>
              </H3>
            </div>
            <SectionObserver href="#quem-sou">
              <div data-aos="fade-right" className="about-me">
                <Caption className="mt-4 md:text-subtitle md:tracking-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: textFormatter(mainText),
                    }}
                  />
                </Caption>
              </div>
            </SectionObserver>
          </div>
        </div>
      </WhoAmISection>
    </Layout>
  );
}
