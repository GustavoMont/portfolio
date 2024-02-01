/* eslint-disable @next/next/no-img-element */
import React from "react";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { Caption, H5 } from "src/styles/Typograph";
import textFormatter from "src/functions/textFormatter";
import SectionObserver from "src/components/common/SectionObserver";

interface WhoIAmProps {
  mainText: string;
}

export default function WhoAmI({ mainText }: WhoIAmProps) {
  return (
    <Layout id="quem-sou" className="flex items-center">
      <GridContainer className="h-full items-center">
        <div className="col-start-1 col-span-3  md:col-span-5">
          <img
            data-aos="fade-up"
            src="appreciate.svg"
            alt="Apreciatte image"
            className="w-8/12 mx-auto"
          />
        </div>
        <div className="col-start-1 col-span-3 md:col-start-6 md:col-span-7 mt-6">
          <div className="w-full">
            <div data-aos="fade-down">
              <H5 className="md:text-heading-4 md:tracking-heading-4">
                Muito prazer, sou {""}
                <span className="text-primary">Gustavo Monteiro 👋</span>
              </H5>
            </div>
            <SectionObserver href="#quem-sou">
              <div>
                <div data-aos="fade-right">
                  <Caption className="mt-4 md:text-subtitle md:tracking-subtitle">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: textFormatter(mainText),
                      }}
                    />
                  </Caption>
                </div>
              </div>
            </SectionObserver>
          </div>
        </div>
      </GridContainer>
    </Layout>
  );
}
