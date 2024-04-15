import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

interface LayoutProps {
  isNotScreenHeight?: boolean;
}

export const defaultXPading = css`
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const layoutStyle = css<LayoutProps>`
  ${defaultXPading}
  padding-top: 3.5rem;
  display: grid;
  min-height: ${({ isNotScreenHeight = false }) =>
    isNotScreenHeight ? "0" : "100vh"};

  img {
    width: 85%;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top: 4rem;
  }
`;

const Layout = styled.section<LayoutProps>`
  ${layoutStyle}
`;

export default Layout;
