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

  return (
    <>
      <header>
        <Navbar className="text-white bg-dark-black">
          <Link href={"/"} passHref>
            <Logo className="col-span-3" onClick={() => setAsActive("")}>
              <span data-text="Gustavo">Gustavo</span>
              <span data-text="Monteiro">Monteiro</span>
            </Logo>
          </Link>
          <NavbarIconContainer className="col-start-4 self-center w-6 md:hidden">
            <IconButton aria-label="abrir menu" onClick={openMenu}>
              <Hamburger />
            </IconButton>
          </NavbarIconContainer>
          <NavbarListContainer className="hidden md:block col-start-7 col-end-13 w-full">
            <ul className="flex gap-4 justify-end items-center h-full">
              {options.map(navLinks)}
            </ul>
          </NavbarListContainer>
        </Navbar>
      </header>
      <MobileMenu
        className="bg-primary text-white md:hidden"
        active={activeMobileMenu}
        ref={menuRef}
      >
        <NavbarIconContainer id="close">
          <IconButton aria-label="fechar menu" onClick={closeMenu}>
            <CloseIcon />
          </IconButton>
        </NavbarIconContainer>
        <ul>{options.map(navLinks)}</ul>
      </MobileMenu>
    </>
  );
}
