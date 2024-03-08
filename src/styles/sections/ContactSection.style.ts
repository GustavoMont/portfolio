import styled from "styled-components";
import GridContainer from "../common/GridContainer";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

export const ContactSection = styled(GridContainer)`
  h3 {
    text-align: center;
  }
  .contact-container {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
  }
  .contacts {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    margin: 1rem 0;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    .contact-container {
      grid-column-start: 4;
      grid-column-end: 10;
    }
  }
`;
