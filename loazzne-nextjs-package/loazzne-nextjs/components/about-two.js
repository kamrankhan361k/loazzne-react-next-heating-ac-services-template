import { AboutTwoData } from "@/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutTwo = () => {
  const { caption, blockTitle, lists, offer } = AboutTwoData;
  function createMarkup() {
    return { __html: caption };
  }
  return (
    <section className="about_service_area section_padding">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about_service_left">
              <p className="about_service_year text-center">
                <span dangerouslySetInnerHTML={createMarkup()} />
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{blockTitle.tagline}</h4>
                <h1>{blockTitle.title}</h1>
              </div>
              <ul>
                {lists.map(({ text }, index) => (
                  <li key={index}>
                    <i className="fa fa-check-circle"></i> {text}
                  </li>
                ))}
              </ul>
              <div className="about_service_discount text-center">
                <h1>{offer.tagline}</h1>
                <p>{offer.text}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
