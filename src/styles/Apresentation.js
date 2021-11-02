import styled from "styled-components";

export const Menu = styled.nav`
    &.bg-active{
        background-color: #101010;
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    height: 90px;
    transition: .5s ease all;
    z-index: 2;
    
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


export const Logo = styled.h1`
    /* Título */
    font-size: 2.15rem;
    position: relative;
    cursor: pointer;
    min-height: 0px;
    &:hover span{
        width: 10rem;
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

export const Card = styled.div`
    font-weight: 200;
    margin-top: 32px;

    position: absolute;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    z-index: -2;
    h2{
        font-weight: 600;
        font-size: 2.75rem;
    }
`;

export const Animation = styled.div`
    background: white;
    width: 490px;
    border-radius: 20px;
    transform: scaleX(-1);
    position: absolute;
    top: 10px;
    right: 56px;
    z-index: -2;
    box-shadow: rgba(240, 46, 170, 0.4) 0px -0px, rgba(240, 46, 170, 0.3) 0px 0px, rgba(240, 46, 170, 0.2) 0px 5px, rgba(240, 46, 170, 0.1) 0px 10px, rgba(240, 46, 170, 0.05) 0px 15px;
`;