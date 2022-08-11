import React, { useState } from "react";
import GridContainer from "src/styles/common/GridContainer";
import Logo from "src/styles/Logo";
import Navbar, { MobileMenu } from "src/styles/Navbar";
import { H5 } from "src/styles/Typograph";
import { CloseIcon, Hamburger } from "../icons";

interface Options {
  href: string;
  title: string;
}

export default function Menu() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);
  const options: Options[] = [
    { href: "#quem-sou", title: "Quem sou" },
    { href: "#o-que-faco", title: "O que faço" },
    { href: "#portfolio", title: "Portfolio" },
    { href: "#contatos", title: "Contatos" },
  ];
  function closeMenu() {
    setActiveMobileMenu(false);
  }
  function openMenu() {
    setActiveMobileMenu(true);
  }
  return (
    <>
      <header>
        <Navbar className="text-white bg-dark-black">
          <GridContainer>
            <Logo>
              <span data-text="Gustavo">Gustavo</span>
              <span data-text="Monteiro">Monteiro</span>
            </Logo>
            <div className="col-start-4 self-center" onClick={openMenu}>
              <Hamburger size={6} />
            </div>
          </GridContainer>
        </Navbar>
      </header>
      <MobileMenu className="bg-primary text-white" active={activeMobileMenu}>
        <div id="close" onClick={closeMenu}>
          <CloseIcon size={6} />
        </div>
        <ul>
          {options.map((option, i) => (
            <li key={i}>
              <H5>{option.title}</H5>
            </li>
          ))}
        </ul>
      </MobileMenu>
    </>
  );
}
