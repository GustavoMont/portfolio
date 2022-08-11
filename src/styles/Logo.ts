import styled from "styled-components";

const Logo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: bold;
  width: fit-content;
  height: 100%;
  span {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 19px;
    margin: 0;
    vertical-align: middle;
    &::after {
      content: attr(data-text);
      color: var(--secondary);
      position: absolute;
      z-index: -1;
      left: 0;
      top: 1px;
    }
  }
`;

export default Logo;