import styled from "styled-components";

interface ButtonProps {
  border: "fill" | "outlined";
  color: "primary" | "secondary";
  rounded: "default" | "pill";
}

const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.border === "outlined" ? "transparent" : `var(--${props.color})`};
  border-radius: ${(props) => (props.rounded === "default" ? "4px" : "999px")};
  border: ${(props) =>
    props.border === "fill" ? "none" : `var(--${props.color}) 1px solid`};
  color: ${(props) =>
    props.border === "outlined" ? `var(--${props.color})` : "var(--white)"};
  transition: all 0.5s ease;
  :hover {
    opacity: 0.8;
  }
`;

export default Button;
