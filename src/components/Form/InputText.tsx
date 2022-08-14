import React from "react";
import InputModel from "src/models/Input";
import Input from "src/styles/form/Input";

interface InputTextProps extends InputModel {
  type?: "text" | "email";
}

export default function InputText(props: InputTextProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.name}>{props.label}</label>
      <Input
        required={props.required}
        className="text-black"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        type={props.type || "text"}
      />
    </div>
  );
}
