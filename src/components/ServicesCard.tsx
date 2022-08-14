/* eslint-disable @next/next/no-img-element */
import React from "react";
import Service from "src/models/Service";
import { Caption, Subtitle } from "src/styles/Typograph";
import WhiteCard from "src/styles/WhiteCard";

interface ServiceCardProps extends Service {
  isOdd: boolean;
}

export default function ServicesCard(props: ServiceCardProps) {
  return (
    <WhiteCard data-aos={props.isOdd ? "fade-up" : "fade-down"}>
      <div className="w-20 text-light-primary">
        <img src={props.iconUrl} alt={props.title} />
      </div>
      <Subtitle className="text-secondary md:text-heading-5 md:tracking-normal">
        {props.title}
      </Subtitle>
      <div>
        <Caption className="text-black md:text-text md:tracking-text">
          {props.explain}
        </Caption>
      </div>
    </WhiteCard>
  );
}
