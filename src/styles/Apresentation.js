import styled from "styled-components";

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