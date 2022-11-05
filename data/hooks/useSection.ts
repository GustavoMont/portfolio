import SectionContext from "data/context/SectionContext";
import { useContext } from "react";

const useSection = () => useContext(SectionContext);

export default useSection;
