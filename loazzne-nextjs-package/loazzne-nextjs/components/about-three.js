import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceShape from "@/images/shape/service-shape.png";
import Link from "./link";
import Img from "./img";
import { AboutThreeData } from "@/data";
import { submit } from "dom7";

const AboutThree = () => {
  const { blockTitle, summery, button, box } = AboutThreeData;
  return (
    <section className="about_area section_border section_padding">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="about_details about_gray responsive_no_pading">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{blockTitle.tagline}</h4>
                <h1>{blockTitle.title}</h1>
              </div>
              <p>{summery}</p>
              <Link href={button.url} className="btn-yellow">
                {button.lable}
              </Link>
              <div className="about_gray_shape">
                <Img src={serviceShape} alt="about shape" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="about_image about_style_2_img">
              <div className="about_2_img"></div>
              {box.map(({ icon, title }, index) => (
                <div className="about_service_box_1" key={index}>
                  <i className={icon}></i>
                  <h2>{title}</h2>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutThree;
