import styled from "styled-components";

const GridContainer = styled.div`
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 2rem;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 24px;
  }
`;

export default GridContainer;
