import styled from "styled-components";
import GridContainer from "../common/GridContainer";
import { BREAKPOINTS } from "../constants/breaking-points-styles.constants";

export const ContactSection = styled(GridContainer)`
  h3 {
    text-align: center;
    align-self: center;
    margin: 1.5rem 0;
  }
  .contact-container {
    grid-column-start: 1;
    grid-column-end: 4;
    border: 2px solid ${({ theme: { colors } }) => colors.primary};
    border-radius: 1rem;
    -webkit-box-shadow: 2px 5px 15px -10px ${({ theme: { colors } }) => colors["dark-primary"]};
    -moz-box-shadow: 2px 5px 15px -10px ${({ theme: { colors } }) => colors["dark-primary"]};
    box-shadow: 2px 5px 15px -10px ${({ theme: { colors } }) => colors["dark-primary"]};
    padding: 0 1rem;
    max-height: 40rem;
    align-self: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
    width: 100%;
    max-width: 35rem;
    margin: 0 auto;
  }
  .contacts {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    margin: 1rem 0;
  }
  @media (min-width: ${BREAKPOINTS.md}) {
    align-items: center;
    .contact-container {
      grid-column-start: 4;
      grid-column-end: 10;
      height: min-content;
    }
    button {
      align-self: center;
    }
  }
`;
