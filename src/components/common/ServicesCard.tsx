/* eslint-disable @next/next/no-img-element */
import React from "react";
import Service from "src/models/Service";
import { Caption, Subtitle } from "src/styles/Typograph";
import WhiteCard from "src/styles/WhiteCard";

interface ServiceCardProps {
  isOdd: boolean;
  service: Service;
}

export default function ServicesCard({ isOdd, service }: ServiceCardProps) {
  return (
    <WhiteCard className="service" data-aos={isOdd ? "fade-up" : "fade-down"}>
      <img src={service.icon.url} alt={service.title} />

      <Subtitle
        color="secondary"
        className="text-secondary md:text-heading-5 md:tracking-normal"
      >
        {service.title}
      </Subtitle>
      <div>
        <Caption className="text-black md:text-text md:tracking-text">
          {service.description}
        </Caption>
      </div>
    </WhiteCard>
  );
}
