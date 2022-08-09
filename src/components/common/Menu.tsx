import React, { useState } from "react";
import GridContainer from "src/styles/common/GridContainer";
import Navbar, { MobileMenu } from "src/styles/Navbar";
import { H5 } from "src/styles/Typograph";
import { CloseIcon, Hamburger } from "../icons";

export default function Menu() {
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);
  const options = ["Coiso1", "Coiso2", "Coiso3"];
  return (
    <>
      <Navbar className="text-white bg-primary">
        <GridContainer>
          <H5 className="" weight="font-bold" text="GM" />
          <div
            className="col-start-3 justify-self-end"
            onClick={() => setActiveMobileMenu(true)}
          >
            <Hamburger size={6} />
          </div>
        </GridContainer>
      </Navbar>
      <MobileMenu
        className="bg-primary text-white"
        theme={{ activeMobileMenu }}
        onClick={() => setActiveMobileMenu(false)}
      >
        <div id="close">
          <CloseIcon size={6} />
        </div>
        <ul>
          {options.map((option, i) => (
            <li key={i}>
              <H5 text={option} />
            </li>
          ))}
        </ul>
      </MobileMenu>
    </>
  );
}
