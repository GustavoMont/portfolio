import styled from "styled-components";

type borderType = "fill" | "outlined";
type roundedType = "default" | "pill";

type Color = "primary" | "secondary";
type HoverColor = "white" | "primary" | "secondary";

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

function handleColor(border: borderType, colors: ButtonColorVariants) {
  switch (border) {
    case "fill":
      return `var(--${colors.main})`;
    default:
      return `var(--${colors.hover})`;
  }
}

const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  background-color: ${(props) => {
    if (props.disabled && props.border !== "outlined") {
      return "#404040";
    }
    return props.border === "outlined"
      ? "transparent"
      : `var(--${props.color})`;
  }};
  border-radius: ${(props) => (props.rounded === "default" ? "4px" : "999px")};
  border: ${(props) =>
    props.border === "fill" ? "none" : `var(--${props.color}) 1px solid`};
  color: ${(props) =>
    props.border === "outlined" ? `var(--${props.color})` : "var(--white)"};
  transition: all 0.5s ease;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  cursor: pointer;
  :active {
    transform: scale(0.95);
    opacity: 0.85;
  }
  :hover {
    border: ${(props) =>
      props.border === "fill"
        ? "none"
        : `var(--${props.hoverColor}) 1px solid`};
    color: ${(props) =>
      handleColor(props.border, {
        main: props.color,
        hover: props.hoverColor,
      })};
    background-color: ${(props) => {
      if (props.disabled && props.border !== "outlined") {
        return "#404040";
      }
      return props.border === "outlined"
        ? "transparent"
        : `var(--${props.hoverColor || "white"})`;
    }};
  }
`;

export default Button;
