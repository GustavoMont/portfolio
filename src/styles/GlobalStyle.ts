import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color: inherit;
  };
  *{
    scroll-behavior: smooth;
  }
  body{
    position: relative;
    overflow-x: hidden;
    background-color: var(--dark-black);
    font-family: 'Poppins', sans-serif;
  }
  body::-webkit-scrollbar {
    width: .5rem;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 99px;
  }
  button {
    background: none;
    padding: 0;
    border: none;
    color: inherit;
  }
  p, span {
    font-family: ${({ theme: { fonts } }) => fonts.title};
  }
`;

export default GlobalStyle;
