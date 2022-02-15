import styled from "styled-components";

// --dark-purple: #36174d;
// --pink: #ff4778;
// --pink-50: rgba(255,71,120, 0.5);
// --white: #f3effe;
// --light-purple: #6f36bc;

export const ListaServicos = styled.ul`
    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        li{
            width: 380px;
            margin: 0 1rem 1rem 0;
            flex-grow: 1;
        }
    }
`


export const Servico = styled.div`
    background-color: rgba(0,0,0, .8);
    border-radius: 5px;
    padding: .5rem;
    font-weight: 100;
    margin: .6rem 0;
    box-shadow: -4px 2px 0px var(--white);
    position: relative;
    overflow: hidden;
    height: inherit;
    transition: 1s all ease;
    &:after, &:before{
        border-radius: inherit;
        position: absolute;
        height: 0;
        width: 0;
        content: '';
        transition: 1s ease all;
    }
    &:before{
        border-bottom: 3px solid transparent;
        border-left: 3px solid transparent;
        bottom: 0;
        left: 0;
    }
    &:after{
        border-top: 3px solid transparent;
        border-right: 3px solid transparent;
        top: 0;
        right: 0;
    }
    &:hover{
        box-shadow: 4px 2px 0px var(--light-purple);
        &:after, &:before{
            height: 100%;
            width: 100%;
            border-color: var(--pink);
        }
    }
    .header{
        height: 40px;
        display: flex;
        align-items: center;
        h3{
            font-size: 1.3rem;
            color: var(--pink);
        }
    }
    .explain{
        padding: .3rem 0;
        min-height: 150px;
        display: flex;
        align-items: center;
    }
    hr{
        margin: .3rem 0;
    }
`