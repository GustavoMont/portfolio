import styled from "styled-components";
import GridContainer from "../common/GridContainer";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

export const WhoAmISection = styled(GridContainer)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .image-container {
    max-width: 30rem;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    display: grid;
    align-items: center;
    .image-container {
      grid-column-start: 1;
      grid-column-end: 6;
      justify-self: center;
      max-width: 80rem;
    }
    .content {
      grid-column-start: 7;
      grid-column-end: 13;
      align-self: center;
    }
  }
`;
