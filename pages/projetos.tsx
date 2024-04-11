import React from "react";
import { Breadcrumb, BreadcrumbItem } from "src/components/common/Breadcrumb";
import { H2 } from "src/styles/Typograph";

function Projetos() {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/#portfolio",
      text: "Portifolio",
    },
    {
      href: "/projetos",
      text: "nome do projeto",
    },
  ];
  return (
    <main style={{ paddingTop: "4rem", color: "white" }}>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <H2 color="white">PROJETOS</H2>
    </main>
  );
}

export default Projetos;
