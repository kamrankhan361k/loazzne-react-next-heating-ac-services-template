import React from "react";
import Img from "./img";
import shapeImage from "@/images/shape/service-color-shape.png";

const ServiceInfo = () => {
  return (
    <div className="service_style_2_area text-center section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="service_img_info_box">
              <div className="service_info_color_shape">
                <Img src={shapeImage} alt="shape" />
              </div>
            </div>
            <div className="justify-content-center d-flex">
              <p className="col-md-10 ">
                Loazzne® is a heating and cooling service company with a history
                of excellence, customer service, and quality craftsmanship. We
                specialize in HVAC service, replacement, and repair for both
                residential and commercial customers in North America.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
