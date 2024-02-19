import styled from "styled-components";
import { ColorKey } from "./colors/colors.type";

type borderType = "fill" | "outlined";
type roundedType = "default" | "pill";

type Color = Extract<ColorKey, 'primary'| 'secondary'>;
type HoverColor = Extract<ColorKey, 'primary'| 'secondary' | 'white'>;

interface ButtonProps {
  border: borderType;
  hoverColor?: HoverColor;
  color: Color;
  rounded: roundedType;
  disabled?: boolean;
}

type ButtonColorVariants = {
  main: Color;
  hover?: HoverColor;
};

function handleColor(border: borderType, colors: Required< ButtonColorVariants>) {
  switch (border) {
    case "fill":
      return colors.main;
    default:
      return colors.hover;
  }
}


const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  background-color: ${({disabled, border, theme: {colors}, color}) => {
    if (disabled && border !== "outlined") {
      return colors["dark-white"];
    }
    return border === "outlined" ? "transparent" : colors[ color];
  }};
  border-radius: ${({rounded}) => (rounded === "default" ? "4px" : "999px")};
  border: ${({border, color, theme: {colors}}) =>
    border === "fill" ? "none" : `${colors[color]} 1px solid`};
  color: ${({  border, color, theme: {colors} }) => colors[border === 'outlined' ? color : 'white']};
  transition: all 0.5s ease;
  pointer-events: ${({disabled}) => (disabled ? "none" : "all")};
  cursor: pointer;
  font-family: Poppins, sans-serif ;
  :active {
    transform: scale(0.95);
    opacity: 0.85;
  }
  :hover {
    border: ${({border, hoverColor = "white", theme: {colors}}) =>
      border === "fill"
        ? "none"
        : `${colors[hoverColor]} 1px solid`};
    color: ${({border, color, hoverColor = "white", theme: {colors}}) =>
      colors[handleColor(border, {
        main: color,
        hover: hoverColor,
      })]};
    background-color: ${({border, disabled, hoverColor = "white", theme: {colors}}) => {
      if (disabled && border !== "outlined") {
        return colors["dark-white"];
      }
      return border === "outlined"
        ? "transparent"
        : colors[hoverColor];
    }};
  }
`;

export default Button;
