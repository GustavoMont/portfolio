import styled from "styled-components";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

interface LayoutProps {
  isNotScreenHeight?: boolean;
}

const Layout = styled.section<LayoutProps>`
  padding: 0 2rem;
  padding-top: 3.5rem;
  display: grid;
  min-height: ${({ isNotScreenHeight = false }) =>
    isNotScreenHeight ? "0" : "100vh"};
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { backgroundScreen } }) => backgroundScreen};
  img {
    width: 85%;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top: 4rem;
  }
`;

export default Layout;
