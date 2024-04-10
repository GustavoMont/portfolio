import styled from "styled-components";
import { ColorKey } from "../colors/colors.type";

interface UnderlinedLinkProps {
  lineColor: Extract<ColorKey, "primary" | "secondary">;
  isActive?: boolean;
}

const UnderlinedLink = styled.a<UnderlinedLinkProps>`
  position: relative;
  &:hover {
    color: ${({ lineColor, theme: { colors } }) => colors[lineColor]};
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
    background-color: ${({ lineColor, theme: { colors } }) =>
      colors[lineColor]};
    transition: all ease 0.5s;
  }
`;

export default UnderlinedLink;
