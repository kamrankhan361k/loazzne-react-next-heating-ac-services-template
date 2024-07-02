import React from "react";
import Link from "@/components/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SlideTwoData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider main-slider-two header_slider_area home_v2_header_slider ">
      <Swiper {...mainSlideOptions}>
        {SlideTwoData.map(
          ({ backgroundImage, title, text, button, url }, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${backgroundImage.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <h1 className="main-slider__title">{title}</h1>
                    <div className="slide_button">
                      <Link href={url} className="btn-yellow">
                        {button}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default SliderTwo;
