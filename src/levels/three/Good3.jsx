import React, { useRef, useState } from "react";
import Video from "../../assets/video/three/good.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `В комнате Уилла перепутаны его детские и подростковые вещи.`,
    `Как будто он одновременно двух возрастов.`,
    `Ты уходишь домой — переосмыслить увиденное.`,
  ],
  goodOption: "Коснуться зеркала",
  badOption: "Испугаться и выкинуть его",
};

const Good3 = () => {
  console.log("Good3");
  const nextLevel = 4;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Good3;
