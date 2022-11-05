import { createContext } from "react";

export type ActiveSectionHref =
  | ""
  | "#quem-sou"
  | "#o-que-faco"
  | "#portfolio"
  | "#portfolio"
  | "#contatos";

export interface SectionContextProps {
  activeSection: ActiveSectionHref;
  setAsActive: (section: ActiveSectionHref) => void;
}

const SectionContext = createContext<SectionContextProps>({
  activeSection: "",
  setAsActive(section) {},
});

export default SectionContext;
