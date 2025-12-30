import React from "react";
import Video from "../../assets/video/four/good.MOV";
import LevelLinePage from "../../components/LevelLinePage";

const levelData = {
  textBeforeVideo: [
    `В зеркале ты увидела Ненси и Стива с темным облаком дыма над ними. Их лица не выражают эмоций, но ты чувствуешь, 
  что они более живые, чем все те, кого ты видела раньше. Нужно встретиться с ними`,
  ],
  goodOption: "Рассказать им честно о странностях",
  badOption: "Оставить их наедине",
};

const Good4 = () => {
  console.log("Good4");
  const nextLevel = 5;

  return (
    <LevelLinePage Video={Video} levelData={levelData} nextLevel={nextLevel} />
  );
};

export default Good4;
