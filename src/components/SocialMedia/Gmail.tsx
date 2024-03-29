import Link from "next/link";
import React from "react";
import { GmailIcon } from "../icons";

export default function Gmail() {
  return (
    <Link
      href={"mailto:lgmluisgm@gmail.com"}
      className="text-white hover:text-light-primary transition ease-in duration-100"
      passHref
    >
      <GmailIcon />
    </Link>
  );
}
