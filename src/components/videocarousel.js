"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const VideoCarousel = () => {
  const videos = [
    "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbuenknitbd%2Fvideos%2F1092912401822893%2F&show_text=false&width=560&t=0",
    "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbuenknitbd%2Fvideos%2F465273366129023%2F&show_text=false&width=560&t=0",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Video Wrapper */}
      <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
        <div className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {videos.map((video, index) => (
            <iframe
              key={index}
              src={video}
              width="100%"
              height="500px"
              className="w-full flex-shrink-0 border-none"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          ))}
        </div>
      </div>

      {/* Dotted Navigation */}
      <div className="flex mt-4 space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-900 scale-125" : "bg-gray-400"
            } transition-all`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
