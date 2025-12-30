import React, { useRef, useState } from "react";
import Video from "../../assets/video/three/bad.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    "И правда - может, ты просто не можешь принять этот идеальный мир? Стоит пойти домой и расслабиться.",
  ],
  goodOption: "Коснуться зеркала",
  badOption: "Испугаться и выкинуть его",
};

const Bad3 = () => {
  console.log("Bad3");
  const nextLevel = 4;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Bad3;
