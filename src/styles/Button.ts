import styled from "styled-components";

interface ButtonProps {
  border: "fill" | "outlined";
  color: "primary" | "secondary";
  rounded: "default" | "pill";
}

const Button = styled.button<ButtonProps>`
  background: #f00;
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.border === "outlined" ? "transparent" : `var(--${props.color})`};
  border-radius: ${(props) => (props.rounded === "default" ? "4px" : "999px")};
  border: ${(props) =>
    props.border === "fill" ? "none" : `var(--${props.color})`};
  color: ${(props) =>
    props.border === "outlined" ? `var(--${props.color})` : "var(--white)"};
`;

export default Button;
