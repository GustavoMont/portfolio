import styled from "styled-components";

export const Menu = styled.nav`
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1.12rem 0;
    /* background-color: black; */
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
`