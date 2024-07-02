import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialOneData } from "@/data";
import Img from "./img";
SwiperCore.use([Autoplay, Thumbs, Navigation]);

const TestimonialsOne = () => {
  const { title, posts } = TestimonialOneData;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    navigation: {
      nextEl: "#testi-slide-next",
      prevEl: "#testi-slide-prev"
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonial_area text-center section_padding">
      <h1 className="testimonial_heading_shape">{title}</h1>
      <Container>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {posts.map(({ image, name }, index) => (
            <SwiperSlide key={index}>
              <div className="testi-thumb-img">
                <Img src={image} alt={name} layout="responsive" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="testimonial_slider "
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {posts.map(({ designation, name, content }, index) => (
            <SwiperSlide key={index} className="testimonial_details">
              <p>{content}</p>
              <h4>{name}</h4>
              <span>{designation}</span>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev" id="testi-slide-prev">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="swiper-button-next" id="testi-slide-next">
            <i className="fa fa-angle-right"></i>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsOne;
