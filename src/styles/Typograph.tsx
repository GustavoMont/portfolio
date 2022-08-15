import React from "react";

interface Heading {
  className?: string;
  children: React.ReactNode;
  weight?: "font-bold" | "font-light";
}

export const H5 = (props: Heading) => (
  <h5
    className={`text-heading-5 ${props.weight || "font-normal"} font-poppins ${
      props.className || ""
    }`}
  >
    {props.children}
  </h5>
);

export const Subtitle = (props: Heading) => (
  <p
    className={`text-subtitle tracking-subtitle ${
      props.weight || "font-normal"
    } font-poppins ${props.className || ""}`}
  >
    {props.children}
  </p>
);

export const Caption = (props: Heading) => (
  <p
    className={`text-caption tracking-caption font-roboto ${
      props.weight || "font-normal"
    } font-poppins ${props.className || ""}`}
  >
    {props.children}
  </p>
);

export const ButtonText = (props: Heading) => (
  <p
    className={`text-button tracking-button ${
      props.weight || "font-medium"
    } font-roboto ${props.className || ""}`}
  >
    {props.children}
  </p>
);

export const BodyText = (props: Heading) => (
  <p
    className={`text-text tracking-text ${
      props.weight || "font-normal"
    } font-roboto ${props.className || ""}`}
  >
    {props.children}
  </p>
);
