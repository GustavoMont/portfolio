import styled from "styled-components";
import GridContainer from "../common/GridContainer";

export const WhatIDoSection = styled(GridContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 3rem;
  h3 {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .service-list {
    justify-content: space-evenly;
    max-width: 180rem;
  }
  .service {
    width: 100%;
    max-width: 500px;
    img {
      width: 30%;
      margin: 0 auto;
    }
    p {
      color: ${({ theme: { colors } }) => colors["light-primary"]};
    }
  }
`;
