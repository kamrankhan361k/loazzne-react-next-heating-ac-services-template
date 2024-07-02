import { FeatureOneData } from "@/data";
import React from "react";

const FeatureOne = () => {
  return (
    <div className="feature_service_area text-center">
      {FeatureOneData.map(({ icon, title }, index) => (
        <div className="feature_service_box_width" key={`feature-one-${index}`}>
          <i className={icon}></i>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureOne;
