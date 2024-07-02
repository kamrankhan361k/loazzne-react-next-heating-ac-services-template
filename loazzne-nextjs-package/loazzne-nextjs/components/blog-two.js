import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@/components/blog-card";
import { BlogTwoData } from "@/data";

const BlogTwo = () => {
  const { posts } = BlogTwoData;
  return (
    <section className="blog_share_area section_padding blog-page">
      <Container>
        <Row>
          {posts.map((data, index) => (
            <Col lg={4} md={6} sm={12} key={`blog-one-${index}`}>
              <BlogCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogTwo;
