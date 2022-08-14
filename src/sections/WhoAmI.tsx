/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import GridContainer from "src/styles/common/GridContainer";
import Layout from "src/styles/common/Layout";
import { Caption, H5 } from "src/styles/Typograph";

export default function WhoAmI() {
  return (
    <Layout id="quem-sou" className="flex items-center" fullHeight>
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
                Muito Prazer, Sou {""}
                <span className="text-primary">Gustavo Monteiro 👋</span>
              </H5>
            </div>
            <div>
              <div data-aos="fade-right">
                <Caption className="mt-4 md:text-subtitle md:tracking-subtitle">
                  Sou <strong>Desenvolvedor Web</strong> desde 2021, quando
                  passei a estudar mais a fundo sobre desenvolvimento front-end
                  e logo já me aprofundei na área. Gosto sempre de manter{" "}
                  <strong> atualizado, estudar novos conceitos </strong>e
                  aceitar <strong> novos desafios.</strong> Atualmente curso
                  <strong> Sistemas de Informação</strong> no{" "}
                  <strong> IFNMG</strong> e estagio na
                  <strong> CTRL+Play</strong>, atuando como desenvolvedor
                  front-end, mas sempre buscando aprender sobre novas áreas e me
                  tornar ainda mais generalista.
                </Caption>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
    </Layout>
  );
}
