import { CallToActionOneData } from "@/data";
import Link from "@/components/link";
import React from "react";

const CtaOne = () => {
  const { title, button } = CallToActionOneData;
  return (
    <section className="call_to_action">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-8 col-xs-12">
            <h1>{title}</h1>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12 text-end cta_responsive_left">
            <Link href={button.url} className="btn-gray">
              {button.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
