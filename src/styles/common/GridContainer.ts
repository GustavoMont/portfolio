import styled from "styled-components";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

type Props = {
  alignItems?: "start" | "center" | "end" | "stretch";
  gap?: number;
};

const GridContainer = styled.div<Props>`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(12, 1fr);
    border: 1px solid white;
    padding: 0 2rem;
    grid-column-gap: 24px;
  }
`;

export default GridContainer;
