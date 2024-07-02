import React from "react";
import latestPost1 from "@/images/blog/post/latest-post-1.jpg";
import latestPost2 from "@/images/blog/post/latest-post-2.jpg";
import latestPost3 from "@/images/blog/post/latest-post-3.jpg";
import Img from "@/components/img";

const BlogSidebar = () => {
  return (
    <div className="blog_details_right">
      <div className="blog_right_box mb-30">
        <div className="widget_search">
          <input type="search" name="s" placeholder="Search here..." />
        </div>
      </div>
      <div className="blog_right_box mb-30">
        <div className="latest_post">
          <h2>Latest Posts</h2>
          <ul>
            <li>
              <a href="#">
                <div className="img-block">
                  <Img src={latestPost1} alt="post 1" layout="responsive" />
                </div>
                Change your air filter regularly
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-block">
                  <Img src={latestPost2} alt="post 1" layout="responsive" />
                </div>
                Our goal is to help you save energy
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img-block">
                  <Img src={latestPost3} alt="post 1" layout="responsive" />
                </div>
                How to ensure your ac system is efficient
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog_right_box mb-30">
        <div className="widget_categories">
          <h2>Categories</h2>
          <ul>
            <li>
              <a href="#">
                Air Conditioning <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Heating <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Repairing <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Maintenance <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Other Services <i className="fa fa-angle-right"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Commercial Services <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog_right_box">
        <div className="tagcloud">
          <h2>Tags</h2>
          <ul>
            <li>
              <a href="">repairing</a>
            </li>
            <li>
              <a href="">air conditioning</a>
            </li>
            <li>
              <a href="">services</a>
            </li>
            <li>
              <a href="">maintenance</a>
            </li>
            <li>
              <a href="">heating</a>
            </li>
            <li>
              <a href="">commerical</a>
            </li>
            <li>
              <a href="">new parts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
