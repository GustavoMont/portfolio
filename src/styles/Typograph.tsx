import React from "react";

interface Heading {
  className?: string;
  children: any;
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

export const ButtonText = (props: Heading) => (
  <p
    className={`text-button tracking-button ${
      props.weight || "font-medium"
    } font-roboto ${props.className || ""}`}
  >
    {props.children}
  </p>
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

// export const H3 = styled.h3`
//   font-size: 2.875rem;
//   letter-spacing: 0px;
//   font-weight: normal;
//   font-family: "Poppins", sans-serif;
// `;
