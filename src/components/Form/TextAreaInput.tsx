import React from "react";
import Input from "src/models/Input";
import TextArea from "src/styles/form/TextArea";

export default function TextAreaInput(props: Input) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name}>{props.label}</label>
      <TextArea value={props.value} onChange={props.onChange}></TextArea>
    </div>
  );
}
