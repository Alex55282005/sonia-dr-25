import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pageStyles.css";

const Story = [
  "Ты видишь сон... Хоукинс... И первое ощущение не страх, а странное спокойствие. Слишком правильное, слишком ровное.",
  `Здесь все немного не так, как ты привыкла: Билли жив и живёт у Джойс, словно так было всегда.
Стив и Нэнси по-прежнему вместе, без конфликтов и разрывов.
Хоппер — твой отец и вы живете вместе.`,
  `Ты пытаешься почувствовать Уилла — ту нить, которая всегда связывала вас, даже сквозь стены и миры. 
  Но нити нет. Пустота. Будто он существует одновременно где-то ещё… и здесь… но не в этом Хоукинсе, 
  не в той реальности, в которой ты сейчас стоишь. Его присутствие ощущается фоном, эхом, но каждый раз, 
  когда ты пытаешься ухватиться за это чувство, оно ускользает.`,
  `Пора просыпаться...`,
  ``,
];

const StartPage = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const checkDiseRoll = () => {
    const diseCount = document.querySelector("#dise-roll").value;
    if (diseCount >= 12) {
      navigate("/level1", { state: { passed: true } });
    } else {
      navigate("/level1", { state: { passed: false } });
    }
  };

  const openStartForm = () => {
    setShowForm(true);
  };

  const DiseForm = () => {
    return (
      <div className="modal-container">
        <p>Брось кубик d20. У тебя есть всего 1 попытка!</p>
        <div className="inputBlock">
          <input
            type="number"
            id="dise-roll"
            placeholder="Впиши значение с кубика"
          />
          <button
            className="submitBtn"
            onClick={checkDiseRoll}
            id="check-roll-btn"
          >
            Проверить
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div id="story-cont" className="start-story-cont">
        {Story.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
        <button className="goNextBtnEndLevel" onClick={openStartForm}>
          Проснуться
        </button>
      </div>
      {showForm && <DiseForm />}
    </div>
  );
};

export default StartPage;
