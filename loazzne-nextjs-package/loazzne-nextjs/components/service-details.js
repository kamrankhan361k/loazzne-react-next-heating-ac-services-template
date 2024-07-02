import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicePost from "./service-post";
import ServiceSidebar from "./service-sidebar";

const ServiceDetails = () => {
  return (
    <section className="service_details_area section_padding">
      <Container>
        <Row>
          <Col lg={8}>
            <ServicePost />
          </Col>
          <Col lg={4}>
            <ServiceSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
