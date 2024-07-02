import React from "react";
import Img from "./img";
import Link from "@/components/link";

const BlogCard = ({ data }) => {
  const { image, date, author, commentCount, title, url, text } = data;
  return (
    <div className="blog_share_box">
      <div className="bl_share_img">
        <Img src={image} alt={title} layout="responsive" />
        <span className="blog_date">{date}</span>
      </div>
      <div className="blog_share_details">
        <span className="comment_author">
          by <Link href={url}>{author}</Link> -{" "}
          <Link href={url}>{commentCount} Comments</Link>
        </span>
        <h1>
          <Link href={url}>{title}</Link>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlogCard;
