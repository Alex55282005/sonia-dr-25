import React, { useRef, useState } from "react";
import Video from "../../assets/video/two/good.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `Он шепчет, что не знает, где находится. Говорит, что испытывает дежавю — будто это уже происходило.`,
    `В трубке — холод, странный скрежет.`,
    `Связь рвут помехи.`,
    `Нужно рассказать Джойс.`,
  ],
  goodOption: "Попытаться разобраться в том, что происходит",
  badOption: "Да это просто паранойя",
};

const Good2 = () => {
  console.log("Good2");
  const nextLevel = 3;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Good2;
