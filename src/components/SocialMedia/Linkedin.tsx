import Link from "next/link";
import React from "react";
import { LinkedinIcon } from "../icons";

export default function Linkedin() {
  return (
    <Link href={"https://linkedin.com/in/luis-gustavo-monteiro"} passHref>
      <a
        target={"_blank"}
        className="text-white hover:text-light-primary transition ease-in duration-100"
      >
        <LinkedinIcon />
      </a>
    </Link>
  );
}
