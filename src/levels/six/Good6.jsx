import React from "react";
import Video from "../../assets/video/six/good.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `Векна громко смеется тебе в лицо и говорит, что построил эту идиллию для тебя.`,
    `Ты приходишь в себя в холодном поту и кажется, что он оставил на тебе свою метку.`,
  ],
  goodOption: "Отправиться в лес с Хоппером",
  badOption: "Отправиться в лес самой, втихую",
};

const Good6 = () => {
  console.log("Good6");
  const nextLevel = 7;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Good6;
