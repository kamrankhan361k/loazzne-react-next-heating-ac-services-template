import React from "react";
import Img from "./img";
import blogDetails1 from "@/images/blog/blog-details.jpg";

const BlogPost = () => {
  return (
    <div>
      <div className="blog_left_box">
        <div className="bl_share_img">
          <Img src={blogDetails1} alt="blog details" layout="responsive" />
          <span className="blog_date">26 Nov</span>
        </div>
        <div className="blog_share_details blog_share_details__details">
          <span className="comment_author">
            by <a href="#">admin</a> - <a href="#">3 Comments</a>
          </span>
          <h1>Simple hack to improve A/C efficiency</h1>
          <p>
            There are many variations passages of lorem ipsum available but the
            majority have suffered alteration. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing lorem ipsum
            passages, and more recently with desktop publishing software like
            aldus page maker including versions of lorem ipsum.
          </p>
        </div>
      </div>
      <div className="blog_social_share_box">
        <div className="share_box_left">
          <p>
            Tags: <a href="#">repairing,</a> <a href="#">heating,</a>{" "}
            <a href="#">air,</a> <a href="#">conditioning</a>
          </p>
        </div>
        <div className="share_box_left text-end">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
