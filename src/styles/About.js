import styled from "styled-components";



export const Grid = styled.div`
    display: grid;
    grid-template-columns: 46% 1fr;
    grid-template-rows: repeat(2, 1fr);
    .info.back{
        opacity: 0.5;
        transform: scale(.7);
    }
    .info{
        grid-column: 1/2;
        text-align: justify;
        transition: 1s ease all;
        &:hover{
            transform: scale(1);
        }
        transform: scale(0.9);
        h2{
            font-size: 2.25rem;
            margin: .5rem 0;
        }
        p{
            font-weight: 200;
            font-size: 1.1rem;
        }
    }
`
