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

export default function Home() {
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
      <WhoAmI />
      <WhatIDo />
      <Portfolio />
    </>
  );
}
export async function getStaticProps() {
  const token = process.env.NEXT_DATOCMS_API_TOKEN_RO;
  const resContent = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `{ 
        about { sou, estudo }, 
        allServices {
          id,
          title,
          description
        },
        allProjects(
          orderBy: [createdAt_ASC]
        ){
          thumbnail{
            url,
            title
          }
          id,
          title,
          description,
          repoLink,
          linkProducao
        }
     }`,
    }),
  });
  const resContentJson = await resContent.json();
  const {
    about,
    ["allServices"]: servicos,
    ["allProjects"]: projetos,
  } = resContentJson.data;
  return {
    props: { about, servicos, projetos },
  };
}
