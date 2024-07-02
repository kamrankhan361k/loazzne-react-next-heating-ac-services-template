import React from "react";
import Img from "@/components/img";
const CommentCard = ({ data }) => {
  const { image, time, name, text } = data;
  return (
    <li className="comment even thread-even depth-1 new-depth">
      <div className="single-comment-box">
        <div className="comment_image">
          <div className="avatar avatar-100 photo">
            <Img src={image} alt={name} />
          </div>
        </div>
        <div className="text-box">
          <h3>{name}</h3>
          <span className="comment_date_time">{time}</span>
          <div className="comment-meta comment-title">
            <p>{text}</p>
          </div>
          <div className="reply comment-title">
            <a rel="nofollow" className="btn-gray comment-reply-link" href="#">
              REPLY
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommentCard;
