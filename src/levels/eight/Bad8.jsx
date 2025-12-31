import React from "react";
import LastLevelPage from "../../components/LastLevelPage";

const levelData = {
  textBeforeVideo: [
    `Когда ты отходишь, какая-то неведомая сила сильно оттолкнула Ненси от дерева, моментально вырубив ее.`,
    `На ее месте начал образовываться неровный, рваный портал.`,
  ],
  goodOption: "Шагнуть в разрыв за Уиллом",
  badOption: "Остаться в идеальном Хоукинсе",
  neutralOption: "Связать миры",
};

const Story =
  "Ты мельком замечаешь Уилла в разрыве. В следующий миг что-то хватает его и уносит вглубь. Знакомый тебе низкий голос шепчет: «Останься. Здесь тебе будет лучше». Хватит ли тебе сил противостоять соблазну бросить своего друга?";

const Bad8 = ({ score }) => {
  console.log("Bad8");
  const nextLevel = 9;

  return (
    <LastLevelPage
      Story={Story}
      levelData={levelData}
      nextLevel={nextLevel}
      score={score}
    />
  );
};

export default Bad8;
