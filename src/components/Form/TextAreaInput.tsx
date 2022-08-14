import React from "react";
import Input from "src/models/Input";
import TextArea from "src/styles/form/TextArea";

export default function TextAreaInput(props: Input) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name}>{props.label}</label>
      <TextArea
        className="text-black"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      ></TextArea>
    </div>
  );
}
