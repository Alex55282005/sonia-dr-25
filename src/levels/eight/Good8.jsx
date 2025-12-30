import React, { useRef, useState } from "react";
import LastLevelPage from "../../components/LastLevelPage";

const levelData = {
  textBeforeVideo: [
    `Ты протягиваешь свою руку, концентрируясь на своей силе.`,
    `Ненси отскакивает от дерева, а на месте, которое она собой закрывала появляется гладкий, овальный портал.`,
  ],
  goodOption: "Шагнуть в разрыв за Уиллом",
  badOption: "Остаться в идеальном Хоукинсе",
  neutralOption: "Связать миры",
};

const Story =
  "Ты мельком замечаешь Уилла в разрыве. Тебе слышны звуки старого-доброго Хоукинса и присутствие Векны. Еще немного и он настигнет твоего друга, но его еще не поздно спасти. Ты не знаешь, сможешь ли ты вернуться назад после этого, поэтому тебе стоит принять решение с умом. ";

const Good8 = ({ score }) => {
  console.log(`Good8: scroe: ${score}`);
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

export default Good8;
