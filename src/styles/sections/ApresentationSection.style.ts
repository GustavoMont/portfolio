import styled from "styled-components";
import GridContainer from "../common/GridContainer";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

export const ApresentationSection = styled(GridContainer)`
  row-gap: 2rem;
  height: calc(100vh - 4rem);
  .main-info {
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  .social-media {
    grid-column-start: 2;
    grid-column-end: 3;
    justify-self: center;
  }
  img {
    grid-column-start: 1;
    grid-column-end: 4;
    justify-self: center;
  }
  border: 2px solid red;

  @media (min-width: ${BREAKPOINTS.md}) {
    row-gap: 0;
    justify-content: center;
    align-items: flex-end;
    grid-auto-rows: min-content;
    .main-info {
      grid-column-start: 2;
      grid-column-end: 6;
      border: 2px solid white;
      height: min-content;
    }
    img {
      grid-column-start: 7;
      grid-column-end: 13;
      justify-self: auto;
      border: 2px solid red;
    }
    .social-media {
      grid-column-start: 2;
      grid-column-end: 6;
    }
  }
`;
