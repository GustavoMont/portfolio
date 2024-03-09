import styled from "styled-components";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";
import { MAX_WIDTH } from "../constants/size.constants";

type Props = {
  alignItems?: "start" | "center" | "end" | "stretch";
  gap?: number;
};

const GridContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  align-self: center;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
  @media (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: repeat(12, 1fr);
    padding: 0 2rem;
    grid-column-gap: 24px;
  }
`;

export default GridContainer;
