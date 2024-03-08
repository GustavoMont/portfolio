import styled from "styled-components";
import GridContainer from "../common/GridContainer";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

export const PortfolioSection = styled(GridContainer)`
  h3 {
    grid-column-start: 1;
    grid-column-end: 4;
    margin-bottom: 1rem;
  }
  .project-list {
    grid-column-start: 1;
    grid-column-end: 4;
    padding-bottom: 2rem;
    .project {
      width: 100%;
      .project-link {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    .project-list {
      grid-column-start: 1;
      grid-column-end: 13;
    }
  }
`;
