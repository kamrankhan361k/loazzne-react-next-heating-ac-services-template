import React from "react";
import { default as A } from "next/link";

const Link = ({ href, children, className }) => {
  return (
    <A href={href}>
      <a className={className}>{children}</a>
    </A>
  );
};

export default Link;
