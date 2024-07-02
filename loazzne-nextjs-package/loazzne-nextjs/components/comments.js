import { CommentPostData } from "@/data";
import React from "react";
import CommentCard from "./comment-card";

const Comments = () => {
  return (
    <div className="blog_comment_box">
      <div className="title-box">
        <h3>{CommentPostData.length} Comments</h3>
      </div>
      <div id="comments" className="comments-area">
        <ul className="comment-list">
          {CommentPostData.map((data, index) => (
            <CommentCard key={index} data={data} />
          ))}
        </ul>

        <div id="respond" className="comment-respond">
          <div className="title-box">
            <h3>Leave a Comment</h3>
          </div>
          <form action="#" method="post">
            <input
              className="half_width input_m_right"
              type="text"
              placeholder="Your name"
            />
            <input
              className="half_width"
              type="text"
              placeholder="Email address"
            />
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              placeholder="Write your message"
            ></textarea>
            <a href="#" className="btn-yellow">
              SUBMIT NOW
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
