import React, { Fragment } from "react";
import Link from "./link";

const PageHeader = ({ title, name }) => {
  return (
    <section className="breadcrumb_section text-center section_padding">
      <ul className="breadcrumb">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>{name}</li>
      </ul>
      <h1>{title}</h1>
    </section>
  );
};

export default PageHeader;
