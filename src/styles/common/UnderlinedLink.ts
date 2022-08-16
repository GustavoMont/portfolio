import styled from "styled-components";

interface UnderlinedLinkProps {
  bgColor: "primary" | "secondary";
  isActive?: boolean;
}

const UnderlinedLink = styled.a<UnderlinedLinkProps>`
  position: relative;
  &:hover {
    :after {
      width: 100%;
    }
  }
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 2px;
    border-radius: 99px;
    background-color: ${({ bgColor }) => `var(--${bgColor})`};
    transition: all ease 0.5s;
  }
`;

export default UnderlinedLink;
