import { TeamOneData } from "@/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamCard from "./team-card";

const TeamOne = ({ extraClassName }) => {
  const { title, posts } = TeamOneData;
  return (
    <section
      className={`team_member_area section_padding text-center ${extraClassName}`}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title text-center">
              <h1>{title}</h1>
            </div>
          </Col>
          {posts.map((data, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <TeamCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamOne;
