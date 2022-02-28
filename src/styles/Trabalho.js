import styled from "styled-components";

export const Screen = styled.div`
  --screen-border: #090909;
  --base: #191919;
  border: 5px solid var(--screen-border);
  border-radius: 5px;
  width: min(100%, 350px);
  height: 140px;
  position: relative;
  background-color: #050505;
  &::before {
    content: "";
    position: absolute;
    display: block;
    bottom: -28px;
    left: 50%;
    z-index: -1;
    width: 20px;
    height: 20px;
    border: 2px solid var(--base);
    background-color: var(--base);
    transform: translateX(-50%);
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: -30px;
    left: 50%;
    z-index: -1;
    width: 40px;
    height: 4px;
    border: 2px solid var(--base);
    background-color: var(--base);
    transform: translateX(-50%);
  }
  .project-screen {
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    height: 175px;
    margin: 0 auto;
  }
`;

export const Project = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0.8rem auto;
  position: relative;
  z-index: 9;
  @media (min-width: 768px) {
    margin: 1rem 0;
    width: 380px;
  }
`;
export const Info = styled.article`
  background-color: var(--pink);
  padding: 0.5rem;
  padding-top: 1.6rem;
  margin-top: 4px;
  font-weight: 100;
  font-size: 0.9rem;
  border-radius: 5px;
  position: relative;
  z-index: -2;
  h3 {
    color: var(--dark-purple);
    text-align: center;
  }
  hr {
    margin: 0.6rem 0;
  }
`;
export const ProjectBtn = styled.a`
  display: block;
  padding: 1rem;
  text-align: center;
  border-bottom: 2px solid white;
  font-weight: 500;
  border-radius: 2px;
  margin: 0.2rem 0;
  position: relative;
  z-index: 990;
  cursor: pointer;
  background-color: ${({ color }) => (color ? `var(${color})` : "transparent")};
  transition: 1s ease all;
  &:hover {
    background-color: var(--light-purple);
  }
`;
