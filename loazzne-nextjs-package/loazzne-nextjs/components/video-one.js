import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
import "react-modal-video/css/modal-video.min.css";
import { VideoOneData } from "@/data";

const VideoOne = () => {
  const { title, id } = VideoOneData;
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <section className="video_promotion_area text-center">
        <div className="overlay">
          <a
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            href="#"
            className="video-img"
            title="Play Icon"
            id="videolink"
          >
            <span className="video-play">
              <i className="fa fa-play"></i>
            </span>
          </a>
          <h1>{title}</h1>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        ratio="16:9"
        isOpen={isOpen}
        videoId="8DP4NgupAhI"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};

export default VideoOne;
