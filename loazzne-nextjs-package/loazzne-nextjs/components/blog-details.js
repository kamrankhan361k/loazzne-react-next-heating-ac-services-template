import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogAuthor from "./blog-author";
import BlogPost from "./blog-post";
import BlogSidebar from "./blog-sidebar";
import Comments from "./comments";

const BlogDetails = () => {
  return (
    <section className="blog_details_section section_padding">
      <Container>
        <Row>
          <Col lg={8}>
            <BlogPost />
            <BlogAuthor />
            <Comments />
          </Col>
          <Col lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
