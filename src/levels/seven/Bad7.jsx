import React from "react";
import Video from "../../assets/video/seven/bad.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `Тебе пришлось закрыться в комнате и потратить время на создание тряпичной куклы, которую ты положила под одеяло.`,
    `За это время по городу успели расползтись ветви, из-за одной из которых ты чуть повредила свою ногу.`,
  ],
  goodOption: "Попробовать использовать силы",
  badOption: "Отступить, чувствуя, что «что-то не так»",
};

const Bad7 = () => {
  console.log("Bad7");
  const nextLevel = 8;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Bad7;
