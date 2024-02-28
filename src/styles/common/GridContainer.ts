import styled from "styled-components";

type Props = {
  alignItems?: "start" | "center" | "end" | "stretch";
  gap?: number;
};

const GridContainer = styled.div<Props>`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: ${({ gap = 0 }) => `${gap}rem`};
  align-items: ${({ alignItems = "stretch" }) => alignItems};
  width: 100%;
  @media (min-width: 768px) {
    padding: 0 2rem;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 24px;
  }
`;

export default GridContainer;
