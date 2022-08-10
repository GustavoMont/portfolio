import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  };
  body{
    position: relative;
    overflow-x: hidden;
    background-color: var(--dark-black);
  }
`;

export default GlobalStyle;
