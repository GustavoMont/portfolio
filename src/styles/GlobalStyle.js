import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');
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
    body{
        font-family: 'Poppins', sans-serif;
        background: var(--dark-purple);
    }
`

export default GlobalStyle;