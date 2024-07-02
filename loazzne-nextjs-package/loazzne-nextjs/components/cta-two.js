import { CallToActionTwoData } from "@/data";
import React from "react";

const CtaTwo = () => {
  const { left, right } = CallToActionTwoData;
  return (
    <section className="cta_style_2_area">
      <div className="cta_style_2_img_left cta_style_2_img_right"></div>
      <div className="cta_style_2_left">
        <p>{left.text}</p>
        <h1>{left.title}</h1>
      </div>
      <div className="cta_style_2_left cta_style_2_right text-end">
        <p>{right.text}</p>
        <h1>{right.title}</h1>
      </div>
    </section>
  );
};

export default CtaTwo;
