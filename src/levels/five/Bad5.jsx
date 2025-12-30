import React from "react";
import Video from "../../assets/video/five/bad.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: ["Ты решаешь, что они ничем не помогут."],
  goodOption: "Ответить да",
  badOption: "Ответить нет",
};

const Bad5 = () => {
  console.log("Bad5");
  const nextLevel = 6;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Bad5;
