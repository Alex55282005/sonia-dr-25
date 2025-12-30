import React from "react";
import Video from "../../assets/video/five/good.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `Ненси сказала тебе, что не верит в совпадения и за всеми странностями кроется что-то большее.`,
    `Она рассказала тебе за недавнее исчезновение Барб и отдала тебе ее последние фото.`,
  ],
  goodOption: "Ответить да",
  badOption: "Ответить нет",
};

const Good5 = () => {
  console.log("Good5");
  const nextLevel = 6;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Good5;
