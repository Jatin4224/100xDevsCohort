import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="w-screen flex flex-col gap-10">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
