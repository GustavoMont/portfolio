import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --dark-purple: #36174d;
        --pink: #ff4778;
        --white: #f3effe;
        --light-purple: #6f36bc
    }
    ul{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background: var(--dark-purple);
    } 
`

export default GlobalStyle;