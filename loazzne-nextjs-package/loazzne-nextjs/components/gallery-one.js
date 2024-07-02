import { GalleryOneData } from "@/data";
import React from "react";
import GalleryCard from "@/components/gallery-card";

const GalleryOne = () => {
  return (
    <section className="gallery_area">
      {GalleryOneData.map(({ title, image, url }, index) => (
        <GalleryCard
          key={`gallery-one-${index}`}
          src={image}
          alt=""
          title={title}
          url={url}
        />
      ))}
    </section>
  );
};

export default GalleryOne;
