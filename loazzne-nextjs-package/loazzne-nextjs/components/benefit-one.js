import { BenefitOneData } from "@/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BenefitOne = () => {
  const { title, posts } = BenefitOneData;
  return (
    <section className="service_benefits_area text-center section_border section_padding">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title">
              <h1>{title}</h1>
            </div>
          </Col>
          {posts.map(({ icon, title, text }, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="service_benefits_box">
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BenefitOne;
