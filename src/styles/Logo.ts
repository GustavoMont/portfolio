import styled from "styled-components";
import { BREAKPOINTS } from "./constants/breaking-points-styles.constants";

const Logo = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.title};
  font-size: 23px;
  font-weight: bold;
  width: fit-content;
  height: 100%;
  color: ${({ theme: { bodyTextColor } }) => bodyTextColor};
  cursor: pointer;
  @media (min-width: ${BREAKPOINTS.md}) {
    font-size: 46px;
  }
  &:hover {
    span::after {
      color: ${({ theme: { colors } }) => colors["light-primary"]};
    }
    @media (min-width: ${BREAKPOINTS.lg}) {
      span,
      span::after {
        width: 13rem;
      }
    }
  }
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
    transition: 0.2s ease-in-out all;
    &::after {
      transition: inherit;
      content: attr(data-text);
      color: ${({ theme: { colors } }) => colors.secondary};
      position: absolute;
      z-index: -1;
      left: 0;
      top: 1px;
    }
    @media (min-width: ${BREAKPOINTS.md}) {
      width: 38px;
      &::after {
        top: 0.25rem;
      }
    }
  }
`;

export default Logo;
