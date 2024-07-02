import { ServiceOneData } from "@/data";
import Link from "@/components/link";
import React from "react";
import Img from "@/components/img";

const ServiceOne = () => {
  const { title, posts } = ServiceOneData;
  return (
    <section className="service_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-section-title text-center">
              <h1>{title}</h1>
            </div>
          </div>
          {posts.map(({ image, icon, title, text, button }, index) => (
            <div className="col-lg-4 col-md-6" key={`service-one-key-${index}`}>
              <div className="service_box">
                <div className="service_img">
                  <Img src={image} alt="service 1" layout="responsive" />
                  <div className="icon-box">
                    <i className={icon}></i>
                  </div>
                </div>
                <div className="service_details">
                  <Link href={button.url}>
                    <h2>{title}</h2>
                  </Link>
                  <p>{text}</p>
                  <Link href={button.url} className="btn-yellow">
                    {button.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
