import styled, { keyframes } from "styled-components";

const moveBg = keyframes`
from {
    transform: translateY(0);
  }
  to {
    transform: translateY(70%);
  }
`;

const Snower = styled.div`
  &:before,
  &:after {
    content: "";
    position: fixed;
    top: -3000%;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -9;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: url(http://www.freepngimg.com/download/winter_snow/4-2-white-snow-png.png);
    background-size: 30%;
    animation: ${moveBg};
    --webkit-animation-name: ${moveBg};
    --webkit-animation-duration: 50s;
    --webkit-animation-timing-function: linear;
    --webkit-animation-iteration-count: infinite;
  }
  &:before {
    filter: blur(4px);
    opacity: 0.8;
    top: -2500%;
    background-size: 60%;
    animation-duration: 400s;
  }
  &:after {
    filter: blur(2px);
    opacity: 0.8;
    top: -2000%;
    background-image: url(https://laviwebfiles.com/stage/codepen/4-2-white-snow-png.png);
    background-size: 70%;
    animation-duration: 300s;
  }
`;

export default Snower;
