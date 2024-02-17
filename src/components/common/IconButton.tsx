import styled from "styled-components";

type Props = {
  "aria-label": string;
};

export const IconButton = styled.button<Props>`
  padding: 0.5rem;
  transition: 0.2s ease-in-out all;
  transform: scale(1);
  :active {
    transform: scale(0.9);
  }
`;
