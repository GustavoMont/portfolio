import { ActiveSectionHref } from "data/context/SectionContext";
import useSection from "data/hooks/useSection";
import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

interface SectionObserverProps {
  children: React.ReactNode;
  href: ActiveSectionHref;
}

const SectionObserver = ({ children, href }: SectionObserverProps) => {
  const { setAsActive } = useSection();

  return (
    <ReactVisibilitySensor
      onChange={(isVisible: boolean) => {
        if (isVisible) {
          setAsActive(href);
        }
      }}
    >
      {children}
    </ReactVisibilitySensor>
  );
};

export default SectionObserver;
