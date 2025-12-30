import React from "react";
import Video from "../../assets/video/six/bad.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `Векна выглядит счастливым и говорит, что построил эту идиллию для тебя.`,
    `Он пообещал, что если ты останешься здесь, он будет потакать любым твоим желаниям и может даже перенести Майка сюда.`,
  ],
  goodOption: "Отправиться в лес с Хоппером",
  badOption: "Отправиться в лес самой, втихую",
};

const Bad6 = () => {
  console.log("Bad6");
  const nextLevel = 7;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Bad6;
