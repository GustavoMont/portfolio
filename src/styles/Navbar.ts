import styled from "styled-components";
import { BREAKPOINTS } from "./constants/breaking-points-styles.constants";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  z-index: 99;
  color: ${({ theme: { colors } }) => colors.white};
  padding: 0 2rem;
  background-color: ${({ theme: { backgroundScreen } }) => backgroundScreen};
  @media (min-width: ${BREAKPOINTS.md}) {
    height: 4rem;
  }
`;

export const NavbarListContainer = styled.div`
  display: none;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    display: block;
  }
`;

export const NavbarIconContainer = styled.div`
  svg {
    width: 24px;
  }
  display: flex;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;

interface MobileMenu {
  active: boolean;
}

export const MobileMenu = styled.div<MobileMenu>`
  height: 100vh;
  width: 74vw;
  position: fixed;
  top: 0;
  right: ${({ active }) => (active ? "0" : "-100%")};
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  transition: 0.5s ease-in-out all;
  z-index: 99;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  #close {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 3rem;
    margin-bottom: 3rem;
    padding-right: 0.5rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;
