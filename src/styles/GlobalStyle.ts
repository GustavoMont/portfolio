import { createGlobalStyle } from "styled-components";

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
`;

export default GlobalStyle;
