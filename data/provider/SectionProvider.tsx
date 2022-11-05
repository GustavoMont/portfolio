import SectionContext, { ActiveSectionHref } from "data/context/SectionContext";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useState } from "react";

const SectionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<ActiveSectionHref>("");
  function setAsActive(section: ActiveSectionHref) {
    setActiveSection(section);
  }

  return (
    <SectionContext.Provider value={{ activeSection, setAsActive }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
