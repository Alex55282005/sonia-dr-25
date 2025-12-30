import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import startVideo from "../../assets/video/one/good.MOV";

const levelData = {
  goodOption: "Ответить Уиллу и спросить, где он",
  badOption: "Испугаться и повесить трубку",
};

const Good1 = () => {
  console.log("good1");

  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    document.querySelector("#overlay-rift").style = "display: none;";
  }, [2000]);

  const handleVideoEnd = () => {
    setShowForm(true);
  };

  const handleVidoPlay = (e) => {
    e.target.style.width = "100%";
    e.target.controls = false;
  };

  const goToGood = () => {
    navigate("/level2", { state: { line: true } });
  };

  const goToBad = () => {
    navigate("/level2", { state: { line: false } });
  };

  const StartPlayVideo = async () => {
    const video = document.querySelector("#video");

    try {
      await video.play();
      document.querySelector("#play-video-btn").style.display = "none";
    } catch (err) {
      console.error("Не удалось запустить видео:", err);
    }
  };

  const ChoiseForm = () => {
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

  return (
    <div className="container">
      <div className="overlay-after-rift" id="overlay-rift"></div>
      <div className="video-cont">
        <video
          width={800}
          onPlay={handleVidoPlay}
          onEnded={handleVideoEnd}
          id="video"
        >
          <source src={startVideo} type="video/mp4" />
        </video>
        <button
          id="play-video-btn"
          className="play-video-btn"
          onClick={StartPlayVideo}
          style={{ display: "block" }}
        >
          Смотреть
        </button>
      </div>
      {showForm && <ChoiseForm />}
    </div>
  );
};

export default Good1;
