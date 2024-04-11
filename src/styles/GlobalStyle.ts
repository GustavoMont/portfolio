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
    background-color: ${({ theme: { backgroundScreen } }) => backgroundScreen};
    font-family: 'Poppins', sans-serif;
    * {transition: .2s ease all;}
  }
  body::-webkit-scrollbar {
    width: .5rem;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.primary};
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
    color: ${({ theme: { bodyTextColor } }) => bodyTextColor};
  }
`;

export default GlobalStyle;
