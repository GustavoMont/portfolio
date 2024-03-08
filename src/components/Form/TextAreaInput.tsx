import React from "react";
import Input from "src/models/Input";
import TextArea from "src/styles/form/TextArea";
import styled from "styled-components";

export default function TextAreaInput({ label, name, onChange, value }: Input) {
  return (
    <TextAreaContainer className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <TextArea
        className="text-black"
        value={value}
        onChange={onChange}
        name={name}
      ></TextArea>
    </TextAreaContainer>
  );
}

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
