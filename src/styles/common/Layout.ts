import styled from "styled-components";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

interface LayoutProps {
  isNotScreenHeight?: boolean;
}

const Layout = styled.section<LayoutProps>`
  padding-top: 3.5rem;
  min-height: ${(props) => (props.isNotScreenHeight ? "0" : "100vh")};
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { backgroundScreen } }) => backgroundScreen};
  display: flex;
  flex-direction: column;
  img {
    width: 85%;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top: 4rem;
  }
`;

export default Layout;
