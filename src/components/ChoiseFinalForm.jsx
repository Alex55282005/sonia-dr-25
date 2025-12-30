import React from "react";

const ChoiseFinalForm = ({
  levelData,
  goToGood,
  goToBad,
  goToNeutral,
  score,
}) => {
  return (
    <div
      className={
        score == 0
          ? "choise-container final-choise-container"
          : "choise-container"
      }
    >
      <p className="finalChoiseTitle">
        {score == 0
          ? "Ты набрала секретное количество выборов - теперь выбери один из трех вариантов будущего!"
          : "Ты набрала количество выборов только для одного варианта будущего!"}
      </p>
      <div
        className={
          score < 0
            ? "option-container option-disable-container"
            : "option-container"
        }
      >
        <p className="option-text">{levelData.goodOption}</p>
        <div className="inputBlock">
          {score < 0 ? (
            <button className="submitBtn">Выбрать</button>
          ) : (
            <button className="submitBtn" onClick={goToGood}>
              Выбрать
            </button>
          )}
        </div>
      </div>
      {score == 0 && (
        <div className="option-container">
          <p className="option-text">{levelData.neutralOption}</p>
          <div className="inputBlock">
            <button className="submitBtn" onClick={goToNeutral}>
              Выбрать
            </button>
          </div>
        </div>
      )}
      <div
        className={
          score > 0
            ? "option-container option-disable-container"
            : "option-container"
        }
      >
        <p className="option-text">{levelData.badOption}</p>
        <div className="inputBlock">
          {score > 0 ? (
            <button className="submitBtn">Выбрать</button>
          ) : (
            <button className="submitBtn" onClick={goToBad}>
              Выбрать
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiseFinalForm;
