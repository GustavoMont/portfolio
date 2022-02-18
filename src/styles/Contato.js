import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0;
`;

// --dark-purple: #36174d;
// --dark-purple-50: rgba(54,23,77, 0.5);
// --pink: #ff4778;
// --pink-50: rgba(255,71,120, 0.5);
// --white: #f3effe;
// --light-purple: #6f36bc;

export const ContatoDiv = styled.div`
    border-radius: 10px;
    background-color: #0d0d0d;
    width: 100%;
    margin-bottom: 1rem;
    padding: .2rem .5rem;
    .animation{
        margin: 0 auto;
        max-width: 280px;
        font-weight: 100;
        text-align: center;
        h3{
            font-size: 1.3rem;
            color: var(--pink);
            margin-top: -1.8rem;
        }
    }
    hr{
        margin: 1rem 0;
    }
    a{
        position: relative;
        display: block;
        margin: 1rem 0;
        text-align: center;
        cursor: pointer;
        text-decoration: underline;
        color: var(--light-purple);
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
    @media (min-width: 768px) {
        width: 30%;

    }
` 