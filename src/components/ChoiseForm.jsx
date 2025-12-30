import React from "react";

const ChoiseForm = ({ levelData, goToGood, goToBad }) => {
  return (
    <div className="choise-container">
      <div className="option-container">
        <p className="option-text">{levelData.goodOption}</p>
        <div className="inputBlock">
          <button className="submitBtn" onClick={goToGood}>
            Выбрать
          </button>
        </div>
      </div>
      <div className="option-container">
        <p className="option-text">{levelData.badOption}</p>
        <div className="inputBlock">
          <button className="submitBtn" onClick={goToBad}>
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoiseForm;
