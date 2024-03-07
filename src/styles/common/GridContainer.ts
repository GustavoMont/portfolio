import styled from "styled-components";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

type Props = {
  alignItems?: "start" | "center" | "end" | "stretch";
  gap?: number;
};

const GridContainer = styled.div<Props>`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  align-self: center;
  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(12, 1fr);
    padding: 0 2rem;
    grid-column-gap: 24px;
  }
`;

export default GridContainer;
