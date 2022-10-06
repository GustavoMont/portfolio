import React, { useEffect } from "react";
import Head from "next/head";
import GlobalStyle from "../src/styles/GlobalStyle";
import Menu from "src/components/common/Menu";
import Aos from "aos";
import "aos/dist/aos.css";
import Apresentation from "src/sections/Apresentation";
import WhoAmI from "src/sections/WhoAmI";
import WhatIDo from "src/sections/WhatIDo";
import Portfolio from "src/sections/Portfolio";
import Contact from "src/sections/Contact";
import Service from "src/models/Service";
import Project from "src/models/Project";

interface HomeProps {
  services: Service[];
  whoAmI: string;
  projects: Project[];
}

export default function Home(props: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1900 });
  }, []);

  return (
    <>
      <Head>
        <title>Gustavo Monteiro</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <GlobalStyle />
      <Menu />
      <Apresentation />
      <WhoAmI mainText={props.whoAmI} />
      <WhatIDo services={props.services} />
      <Portfolio projects={props.projects} />
      <Contact />
    </>
  );
}

interface ResponseDato {
  data: {
    pageContent: {
      whoAmI: string;
    };
    allServices: Service[];
    allProjects: Project[];
  };
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const token = process.env.NEXT_DATOCMS_API_TOKEN_RO;
  const resContent = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
      {
        pageContent{
          whoAmI
        }
        allServices{
          title,
          description,
          id,
          icon {
            url
          }
        },
        allProjects {
          id
          title,
          projectType,
          deployLink,
          githubLink,
          description,
          thumbnail {
            alt,
            url
          },
        }
      }
      `,
    }),
  });
  const resContentJson: ResponseDato = await resContent.json();
  const {
    allServices: services,
    allProjects: projects,
    pageContent,
  } = resContentJson.data;

  return {
    props: { services, whoAmI: pageContent.whoAmI, projects },
  };
}
