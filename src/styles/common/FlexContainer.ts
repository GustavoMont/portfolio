import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default FlexContainer;
