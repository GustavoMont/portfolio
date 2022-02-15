import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --dark-purple: #36174d;
        --dark-purple-50: rgba(54,23,77, 0.5);
        --pink: #ff4778;
        --pink-50: rgba(255,71,120, 0.5);
        --white: #f3effe;
        --light-purple: #6f36bc;
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
        /* background-image: linear-gradient( 90deg,  rgba(118,12,99,1) 11.2%, rgba(71,11,75,1) 98.6% ); */
        background: var(--dark-purple);
    } 
`

export default GlobalStyle;