/* eslint-disable @next/next/no-img-element */
import React from "react";
import { parseToHtml } from "src/functions/parseToHtml";
import Service from "src/models/Service";
import { Subtitle } from "src/styles/Typograph";
import WhiteCard from "src/styles/WhiteCard";

interface ServiceCardProps {
  isOdd: boolean;
  service: Service;
}

export default function ServicesCard({ isOdd, service }: ServiceCardProps) {
  return (
    <WhiteCard className="service" data-aos={isOdd ? "fade-up" : "fade-down"}>
      <img src={service.icon.url} alt={service.title} />

      <Subtitle color="secondary">{service.title}</Subtitle>
      <div
        dangerouslySetInnerHTML={{
          __html: parseToHtml(service.description),
        }}
      />
    </WhiteCard>
  );
}
