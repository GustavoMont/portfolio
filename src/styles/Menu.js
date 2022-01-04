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
    padding-left:  56px;
    padding-right:  56px;

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
    /* Responsive ============ */
    @media (max-width: 768px) {
        padding-left:  1rem;
        padding-right:  1rem;
        background-color: #020202;
        height: 12vh;
        ul{
            background-color: #0a0a0a;
            position: absolute;
            bottom: 100vh;
            left: 0vw;
            z-index: -10;
            height: 88vh;
            width: 100%;
            flex-direction: column;
            transition: all 1.5s ease;
        }
        #hamburger-menu{
            position: relative;
            display: block;
            width: 40px;
            height: 40px;
            border: 1px solid red;
            .bar, &::before, &:after{
                display: block;
                width: 100%;
                height: 5px;
                background-color: white;
                position: absolute;
                content: '';
                transition: 1s ease all;
                border-radius: 3px;
            }
            &:after{
                bottom:0;
            }
            .bar{
                top: 50%;
                transform: translateY(-50%);
            }
            &.active{
                + .active{
                    bottom: -88vh;
                }
                &:before{
                    margin-top: 50%;
                    transform: translateY(-50%) rotate(45deg);
                }
                &:after{
                    margin-bottom: 50%;
                    transform: translateY(50%) rotate(45deg);
                }
                .bar{
                    transform: translateY(-50%) rotate(-45deg);
                }
            }
        }
    }
    
`;

export const Logo = styled.h1`
    /* Título */
    font-size: 2.25rem;
    position: relative;
    cursor: pointer;
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
        width: 1.80rem;
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
    /* Responsive ================ */
    @media (min-width: 1180px) {
        &:hover span{
            width: 10.15rem;
            &::after{
                color: var(--pink);
            }
        }
    }
`;