import React from "react";
import Img from "./img";
import Author from "@/images/author.jpg";

const BlogAuthor = () => {
  return (
    <div className="blog_author_box">
      <div className="author_img">
        <Img src={Author} alt="author" layout="responsive" />
      </div>
      <div className="author_bio">
        <h2>Christine Eve</h2>
        <p>
          Lorem Ipsum is simply dummy text of the rinting and typesetting been
          the industry standard dummy text ever sincer nullam condimentum purus.
        </p>
        <a href="#" className="author_profile">
          View All Posts
        </a>
      </div>
    </div>
  );
};

export default BlogAuthor;
