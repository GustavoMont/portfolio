import { BREAKPOINTS } from "src/styles/constants/breaking-points-styles.constants";
import styled from "styled-components";

export const GalleryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${BREAKPOINTS.md}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 2rem;
  }
  @media (min-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${BREAKPOINTS["2xl"]}) {
    grid-template-columns: repeat(4, 1fr);
  }
  li {
    width: 100%;
    margin: 0 auto;
  }
`;
