import React from "react";
import Video from "../../assets/video/seven/good.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    "Хоппер был не очень рад тому, что ты подвергнешь себя опасности, но он не смог отказать тебе. Вместе вы молча добираетесь до леса",
  ],
  goodOption: "Попробовать использовать силы",
  badOption: "Отступить, чувствуя, что «что-то не так»",
};

const Good7 = () => {
  console.log("Good7");
  const nextLevel = 8;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Good7;
