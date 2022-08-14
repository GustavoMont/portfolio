import styled from "styled-components";

interface LayoutProps {
  isNotScreenHeight?: boolean;
}

const Layout = styled.section<LayoutProps>`
  padding-top: 3.5rem;
  padding-bottom: ${(props) => (props.isNotScreenHeight ? "0" : "1rem")};
  min-height: ${(props) => (props.isNotScreenHeight ? "0" : "100vh")};
  color: var(--white);
  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: ${(props) => (props.isNotScreenHeight ? "0" : "4rem")};
  }
`;

export default Layout;
