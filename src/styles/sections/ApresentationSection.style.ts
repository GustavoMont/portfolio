import styled from "styled-components";
import GridContainer from "../common/GridContainer";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

export const ApresentationSection = styled(GridContainer)`
  row-gap: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 130rem;
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
    animation: bounce 2s infinite ease-in-out;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    row-gap: 0;
    align-items: flex-end;
    grid-template-rows: 1fr 3rem 1fr;
    row-gap: 0.5em;
    .main-info,
    .social-media {
      grid-column-start: 2;
      grid-column-end: 7;
    }
    .main-info {
      grid-row-start: 1;
      grid-row-end: 2;
    }
    img {
      grid-column-start: 7;
      grid-column-end: 13;
      grid-row-start: 1;
      grid-row-end: 4;
      max-width: 60rem;
    }
    .social-media {
      grid-row-start: 2;
      grid-row-end: 3;
      align-self: center;
    }
  }
`;
