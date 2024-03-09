import styled from "styled-components";

const WhiteCard = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.black};
`;

export default WhiteCard;
