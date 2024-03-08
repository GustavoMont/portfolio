import React from "react";
import InputModel from "src/models/Input";
import Input from "src/styles/form/Input";
import styled from "styled-components";

interface InputTextProps extends InputModel {
  type?: "text" | "email";
}

export default function InputText({
  label,
  name,
  onChange,
  value,
  required,
  type,
}: InputTextProps) {
  return (
    <InputContainer className="flex flex-col w-full">
      <label htmlFor={name}>{label}</label>
      <Input
        required={required}
        className="text-black"
        onChange={onChange}
        value={value}
        name={name}
        type={type || "text"}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
