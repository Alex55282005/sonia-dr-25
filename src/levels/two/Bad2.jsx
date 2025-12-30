import React, { useRef, useState } from "react";
import Video from "../../assets/video/two/bad.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `Ты ничего не узнала.`,
    `Но рассказать Джойс всё равно нужно.`,
  ],
  goodOption: "Попытаться разобраться в том, что происходит",
  badOption: "Да это просто паранойя",
};

const Bad2 = () => {
  console.log("Bad2");
  const nextLevel = 3;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Bad2;
