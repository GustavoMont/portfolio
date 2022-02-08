import styled, { keyframes } from "styled-components";

const writte = keyframes`
    to{
        left: 110%;
    }
`
const blink = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

// --dark-purple: #36174d;
// --pink: #ff4778;
// --pink-50: #ff4778;
// --white: #f3effe;
// --light-purple: #6f36bc;

export const Card = styled.div`
    border-radius: 8px;
    position: absolute;
    width: 95vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p{
        font-weight: 100;
        font-size: .8rem;
        @media(min-width: 768px) {
            font-size: 1rem;
        }
    }
    h2{
        font-size: 1.8rem;
        font-weight: 500;
        background-color: var(--light-purple) ;
        padding: .2rem;
        position: relative;
        width: min(100%, 450px);
        overflow: hidden;
        @media(min-width: 768px) {
            background-color: transparent;
            display: inline;
            font-size: 2rem;
        }
        &:after{
            content: '';
            display: block;
            background-color: var(--light-purple);
            width: 100%;
            height: 3rem;
            position: absolute;
            top: 0;
            left: 0%;
            border-left: 3px solid #fff;
            animation: 4s ${writte} steps(20) alternate-reverse infinite;
            @media(min-width: 768px) {
                background-color: transparent;
                opacity: 0;
                height: 3rem;
                animation: 1s ${blink} infinite;
                top: 2px;
                left: 100%;
            }
        }
    }
`;

export const AnimationCard = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: block;
        background-color: #fff;
        transform: scaleX(-1);
        width: min(50vw, 600px);
        position: absolute;
        right: 3.5rem;
        border-radius: 50px;
    }
`;