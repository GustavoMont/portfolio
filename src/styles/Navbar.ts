import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
`;

interface MobileMenu {
  active: boolean;
}

export default Navbar;

export const MobileMenu = styled.div<MobileMenu>`
  height: 100vh;
  width: 74vw;
  position: absolute;
  top: 0;
  right: ${(props) => (props.active ? "0" : "-100%")};
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  transition: 0.5s ease-in-out all;
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
  }
`;
