import styled from "styled-components";

export const Menu = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 5rem;
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
        &:hover + ul {
            width: 0;
            overflow: hidden;
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
        transition: width .3s ease;
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

export const Logo = styled.h1`
    /* Título */
    font-size: 2rem;
    position: relative;
    cursor: pointer;
    /* border: 2px solid red; */
    min-height: 0px;
    &:hover span{
        width: 8rem;
        &::after{
            color: var(--pink);
        }
    }
    span{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        transition: 1s ease width;
        display: inline-block;
        width: 1.78rem;
        overflow: hidden;
        position: relative;
        z-index: 5;
        &::after{
            content: attr(data-text);
            color: var(--light-purple);
            position: absolute;
            z-index: -1;
            left: 0;
            top: 2px;
        }
    }
`;