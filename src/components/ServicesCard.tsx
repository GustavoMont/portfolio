/* eslint-disable @next/next/no-img-element */
import React from "react";
import Service from "src/models/Service";
import { Caption, Subtitle } from "src/styles/Typograph";
import WhiteCard from "src/styles/WhiteCard";
import { CodeIcon } from "./icons";

export default function ServicesCard(props: Service) {
  return (
    <WhiteCard>
      <div className="w-20 text-light-primary">
        <img src={props.iconUrl} alt={props.title} />
      </div>
      <Subtitle className="text-secondary">{props.title}</Subtitle>
      <div>
        <Caption className="text-black">{props.explain}</Caption>
      </div>
    </WhiteCard>
  );
}
