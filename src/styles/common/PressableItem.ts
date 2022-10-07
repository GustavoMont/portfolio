import styled from "styled-components";

const PressableItem = styled.div`
  transform: scale(1);
  :active {
    transform: scale(0.95);
    opacity: 0.85;
  }
`;

export default PressableItem;
