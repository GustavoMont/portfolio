import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import GridContainer from "src/styles/common/GridContainer";
import UnderlinedLink from "src/styles/common/UnderlinedLink";
import Logo from "src/styles/Logo";
import Navbar, { MobileMenu } from "src/styles/Navbar";
import { H5, Subtitle } from "src/styles/Typograph";
import { CloseIcon, Hamburger } from "../icons";

interface Options {
  href: string;
  title: string;
}

export default function Menu() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const options: Options[] = [
    { href: "#quem-sou", title: "Quem sou" },
    { href: "#o-que-faco", title: "O que faço" },
    // { href: "#portfolio", title: "Portfolio" },
    { href: "#contatos", title: "Contatos" },
  ];
  function closeMenu() {
    setActiveMobileMenu(false);
  }
  function openMenu() {
    setActiveMobileMenu(true);
  }

  function isActiveLink(href: string) {
    const sectionId = router.asPath.split("/")[1];
    return href === sectionId;
  }

  useEffect(() => {
    document.body.style.overflowY = activeMobileMenu ? "hidden" : "auto";
  }, [activeMobileMenu]);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current?.contains(e.target as Node | null)) {
        setActiveMobileMenu(false);
      }
    });
  }, []);

  function navLinks(option: Options, i: number) {
    return (
      <li key={i}>
        <Link href={option.href} passHref>
          <UnderlinedLink
            isActive={isActiveLink(option.href)}
            bgColor="secondary"
            onClick={closeMenu}
          >
            {option.title}
          </UnderlinedLink>
        </Link>
      </li>
    );
  }

  return (
    <>
      <header>
        <Navbar className="text-white bg-dark-black">
          <GridContainer>
            <Link href={"/"} passHref>
              <Logo className="col-span-3">
                <span data-text="Gustavo">Gustavo</span>
                <span data-text="Monteiro">Monteiro</span>
              </Logo>
            </Link>
            <div
              className="col-start-4 self-center w-6 md:hidden"
              onClick={openMenu}
            >
              <Hamburger size={6} />
            </div>
            <div className="hidden md:block col-start-7 col-end-13 w-full">
              <ul className="flex gap-4 justify-end items-center h-full">
                {options.map(navLinks)}
              </ul>
            </div>
          </GridContainer>
        </Navbar>
      </header>
      <MobileMenu
        className="bg-primary text-white md:hidden"
        active={activeMobileMenu}
        ref={menuRef}
      >
        <div id="close" onClick={closeMenu}>
          <CloseIcon size={6} />
        </div>
        <ul>{options.map(navLinks)}</ul>
      </MobileMenu>
    </>
  );
}
