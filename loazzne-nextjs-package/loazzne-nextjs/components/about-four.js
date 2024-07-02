import { AboutFourData } from "@/data";
import React from "react";
import Img from "./img";
import aboutShape from "@/images/shape/about-shape.png";

const AboutFour = () => {
  const { blockTitle } = AboutFourData;
  const { title, text1, text2 } = blockTitle;
  function createMarkup() {
    return { __html: title };
  }
  return (
    <section className="about_style_3_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="about_image_box"></div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="about_image_box about_image_box2"></div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="about_image_box about_image_box3"></div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="about_style_3_details">
              <h1 dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="about_style_3_details">
              <div className="about_us_shape">
                <Img src={aboutShape} alt="about shape" layout="responsive" />
              </div>
              <p>{text1}</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="about_style_3_details">
              <p>{text2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFour;
