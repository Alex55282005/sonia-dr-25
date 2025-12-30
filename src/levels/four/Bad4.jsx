import React from "react";
import Video from "../../assets/video/four/bad.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `Зеркало трескается, разбиваясь на сотню маленьких осколков.`,
    `В одном из них ты увидела Стива и Ненси со счастливыми улыбками на лицах. Интересно, что их так порадовало?`,
  ],
  goodOption: "Рассказать им честно о странностях",
  badOption: "Оставить их наедине",
};

const Bad4 = () => {
  console.log("Bad4");
  const nextLevel = 5;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Bad4;
