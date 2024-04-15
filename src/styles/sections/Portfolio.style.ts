import styled from "styled-components";
import GridContainer from "../common/GridContainer";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

export const PortfolioSection = styled(GridContainer)`
  padding-top: 2rem;
  padding-bottom: 8rem;
  grid-row-gap: 2rem;
  h3 {
    grid-column-start: 1;
    grid-column-end: 8;
  }
  ul.project-list {
    grid-column-start: 1;
    grid-column-end: 4;
    color: ${({ theme: { colors } }) => colors.white};
    .project {
      .project-link {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
    @media (min-width: ${BREAKPOINTS.md}) {
      grid-column-start: 1;
      grid-column-end: 13;
    }
  }
`;
