import React from "react";
import Img from "@/components/img";
const GalleryCard = ({ src, alt, title, url }) => {
  return (
    <div className="gallery_width">
      <div className="gallery_fixed_height">
        <div className="gallery_width__image">
          <Img src={src} alt={alt} layout="responsive" />
        </div>
        <div className="gallery_overlay">
          <h3>{title}</h3>
          <a href={url} className="gallery_icon_btn text-end">
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
