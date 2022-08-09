interface Heading {
  className?: string;
  text: string;
  weight?: "font-bold" | "font-light";
}

export const H5 = (props: Heading) => (
  <h5
    className={`text-heading-5 ${props.weight || "font-normal"} font-poppins ${
      props.className || ""
    }`}
  >
    {props.text}
  </h5>
);

// export const H3 = styled.h3`
//   font-size: 2.875rem;
//   letter-spacing: 0px;
//   font-weight: normal;
//   font-family: "Poppins", sans-serif;
// `;
