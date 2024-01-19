import Link from "next/link";
import React from "react";
import { LinkedinIcon } from "../icons";

export default function Linkedin() {
  return (
    <Link
      target={"_blank"}
      className="text-white hover:text-light-primary transition ease-in duration-100"
      href={"https://linkedin.com/in/luis-gustavo-monteiro"}
      passHref
    >
      <LinkedinIcon />
    </Link>
  );
}
