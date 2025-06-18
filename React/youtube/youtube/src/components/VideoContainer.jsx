import React from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    setVideos(response.items);
  };

  return (
    <div className="flex  flex-wrap gap-4 justify-start px-4 overflow-y-auto h-[95vh]">
      {videos.map((item, index) => (
        <VideoCard cardContent={item} key={index} />
      ))}
    </div>
  );
};

export default VideoContainer;
