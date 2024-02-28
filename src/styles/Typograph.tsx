import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { ColorKey, Colors } from "./colors/colors.type";

interface Heading {
  className?: string;
  weight?: "font-bold" | "font-light";
}

const handleTextColor = (colors: Colors, color: ColorKey | undefined) =>
  color ? colors[color] : "inherit";

interface Props {
  color?: ColorKey;
  /**Medida em rem(16px) */
  fontSize?: number;
}

export const H2 = styled.h2<Props>`
  color: ${({ color, theme: { colors } }) => handleTextColor(colors, color)};
  font-family: ${({ theme: { fonts } }) => fonts.title};
  font-size: ${({ fontSize = 2 }) => `${fontSize}rem`};
`;

export const H5: React.FC<PropsWithChildren<Heading>> = ({
  className,
  weight,
  children,
}) => (
  <h5
    className={`text-heading-5 ${weight || "font-normal"} font-poppins ${
      className || ""
    }`}
  >
    {children}
  </h5>
);

export const H3 = styled.h3<Props>`
  color: ${({ theme: { colors }, color }) => handleTextColor(colors, color)};
  font-family: ${({ theme: { fonts } }) => fonts.title};
  font-size: ${({ fontSize = 1.5 }) => `${fontSize}rem`};
`;

export const Subtitle: React.FC<PropsWithChildren<Heading>> = ({
  children,
  className,
  weight,
}) => (
  <p
    className={`text-subtitle tracking-subtitle ${
      weight || "font-normal"
    } font-poppins ${className || ""}`}
  >
    {children}
  </p>
);

export const Caption: React.FC<PropsWithChildren<Heading>> = ({
  children,
  className,
  weight,
}) => (
  <p
    className={`text-caption tracking-caption font-roboto ${
      weight || "font-normal"
    } font-poppins ${className || ""}`}
  >
    {children}
  </p>
);

export const ButtonText: React.FC<PropsWithChildren<Heading>> = ({
  children,
  className,
  weight,
}) => (
  <p
    className={`text-button tracking-button ${
      weight || "font-medium"
    } font-roboto ${className || ""}`}
  >
    {children}
  </p>
);

export const BodyText: React.FC<PropsWithChildren<Heading>> = ({
  children,
  className,
  weight,
}) => (
  <p
    className={`text-text tracking-text ${
      weight || "font-normal"
    } font-roboto ${className || ""}`}
  >
    {children}
  </p>
);

export const Span = styled.span<Props>`
  font-family: inherit;
  font-size: inherit;
  color: ${({ color, theme: { colors } }) => handleTextColor(colors, color)};
`;
