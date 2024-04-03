import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
const Video = () => {
  const [isOpen, SetISOpen] = useState(false);
  return (
    <div className="  bg-[#534686]/30 py-6">
      <div className=" container mx-auto">
        <div className=" flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
          <h3 className=" text-2xl font-semibold mb-8 lg:mb-0">
            Awesome Experience With Virtual Reality World
          </h3>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => SetISOpen(false)}
          />
          <div className=" bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"></div>
          <div onClick={() => SetISOpen(!isOpen)} className=" cursor-pointer">
            <h3 className=" text-2xl text-white/70 hover:text-white">
              {" "}
              Open This Video
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
