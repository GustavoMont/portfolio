import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { BREAKPOINTS } from "src/styles/constants/breaking-points-styles.constants";
import styled from "styled-components";

type Props = {
  imageData: { src: string; alt: string };
  className?: string;
};

export const PageCover: React.FC<PropsWithChildren<Props>> = ({
  imageData,
  className,
  children,
}) => {
  return (
    <ImageContainer className={className}>
      <Image fill src={imageData.src} alt={imageData.alt} />
      <div className="content">{children}</div>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vw;
  @media (min-width: ${BREAKPOINTS.md}) {
    min-height: 75vh;
    max-height: 10rem;
  }
  img {
    object-fit: cover;
    opacity: 1;
  }
  ::after {
    content: "";
    @media (min-width: ${BREAKPOINTS.md}) {
      background: linear-gradient(
        115deg,
        rgba(0, 0, 0, 1) 40%,
        rgba(255, 255, 255, 0) 100%
      );
      top: 0;
    }
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 20%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
  }
  div.content {
    display: none;
    @media (min-width: ${BREAKPOINTS.md}) {
      display: block;
      width: 40%;
      position: absolute;
      bottom: 0vw;
      z-index: 2;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: min-content;
      padding-left: 2rem;
    }
  }
`;
