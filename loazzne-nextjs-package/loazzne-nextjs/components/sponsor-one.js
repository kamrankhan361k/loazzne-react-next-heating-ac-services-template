import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import brandImage from "@/images/client-logo.png";
import Img from "./img";

const SponsorOne = ({ extraClass }) => {
  const sponsorCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5
      }
    }
  };
  return (
    <div
      className={`clients_logo_area text-center section_padding  ${extraClass}`}
    >
      <Container>
        <Swiper {...sponsorCarouselOptions} className="clients_logo ">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Img src={brandImage} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default SponsorOne;
