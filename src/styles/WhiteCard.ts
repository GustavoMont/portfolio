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
  p,
  span {
    color: ${({ theme: { colors } }) => colors.black};
  }
  border: #eee solid 1px;
  -webkit-box-shadow: 2px 4px 34px -5px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 2px 4px 34px -5px rgba(0, 0, 0, 0.54);
  box-shadow: 2px 4px 34px -5px rgba(0, 0, 0, 0.54);
`;

export default WhiteCard;
