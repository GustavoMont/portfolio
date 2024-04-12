import { ActiveSectionHref } from "data/context/SectionContext";
import useSection from "data/hooks/useSection";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import UnderlinedLink from "src/styles/common/UnderlinedLink";
import Logo from "src/styles/Logo";
import {
  Navbar,
  MobileMenu,
  NavbarListContainer,
  NavbarIconContainer,
} from "src/styles/Navbar";
import { CloseIcon, Hamburger } from "../icons";
import { IconButton } from "./IconButton";

interface Options {
  href: ActiveSectionHref;
  title: string;
}

export default function Menu() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { activeSection, setAsActive } = useSection();
  const options: Options[] = [
    { href: "/#quem-sou", title: "Quem sou" },
    { href: "/#o-que-faco", title: "O que faço" },
    { href: "/#portfolio", title: "Portfolio" },
    { href: "/#contatos", title: "Contatos" },
  ];
  function closeMenu() {
    setActiveMobileMenu(false);
  }
  function openMenu() {
    setActiveMobileMenu(true);
  }

  const isActiveLink = (href: ActiveSectionHref) => activeSection === href;

  useEffect(() => {
    document.body.style.overflowY = activeMobileMenu ? "hidden" : "auto";
  }, [activeMobileMenu]);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current?.contains(e.target as Node | null)) {
        setActiveMobileMenu(false);
      }
    });
    return;
  }, []);

  function navLinks({ href, title }: Options) {
    return (
      <li key={href}>
        <UnderlinedLink
          isActive={isActiveLink(href)}
          lineColor="secondary"
          onClick={closeMenu}
          href={href}
        >
          {title}
        </UnderlinedLink>
      </li>
    );
  }

  const optionList = <ul>{options.map(navLinks)}</ul>;

  return (
    <>
      <header>
        <Navbar>
          <Link href={"/"} passHref>
            <Logo onClick={() => setAsActive("")}>
              <span data-text="Gustavo">Gustavo</span>
              <span data-text="Monteiro">Monteiro</span>
            </Logo>
          </Link>
          <NavbarIconContainer>
            <IconButton aria-label="abrir menu" onClick={openMenu}>
              <Hamburger />
            </IconButton>
          </NavbarIconContainer>
          <NavbarListContainer>{optionList}</NavbarListContainer>
        </Navbar>
      </header>
      <MobileMenu active={activeMobileMenu} ref={menuRef}>
        <NavbarIconContainer id="close">
          <IconButton aria-label="fechar menu" onClick={closeMenu}>
            <CloseIcon />
          </IconButton>
        </NavbarIconContainer>
        {optionList}
      </MobileMenu>
    </>
  );
}
