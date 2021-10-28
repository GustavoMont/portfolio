import styled from "styled-components";

export const Menu = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 100px;
    /* background-color: #101010; */
    /* Título */
    h1{
        font-size: 2.25rem;
        position: relative;
        cursor: pointer;
        &:hover span{
            width: 10.15rem;
            &::after{
                color: var(--pink);
            }
        }
        span{
            transition: 1s ease width;
            display: inline-block;
            width: 1.84rem;
            overflow: hidden;
            position: relative;
            &::after{
                content: attr(data-text);
                color: var(--light-purple);
                position: absolute;
                z-index: -1;
                left: 0;
                top: 2px;
            }
            
        }
    }
    /* Lista */
    ul{
        width: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            position: relative;
            transition: 1s ease all;
            cursor: pointer;
            &:after{
                content: '';
                position: absolute;
                left: 0;
                bottom: -10px;
                width: 0;
                height: 2px;
                background-color: var(--pink);
                transition: all ease .5s;
            }
            &:hover:after{
                width: 100%;
            }
        }
    }
`;

export const Card = styled.div`
    font-weight: 200;
    margin-top: 32px;

    position: absolute;
    top: 58%;
    transform: translateY(-50%);
    h2{
        font-weight: 600;
        font-size: 2.75rem;
    }

`;