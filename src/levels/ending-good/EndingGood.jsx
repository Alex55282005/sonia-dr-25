import React, { useState } from "react";
import endingVideo from "../../assets/video/ending-good/video.MOV";

const EndingGood = () => {
  console.log("EndingGood");

  const [showForm, setShowForm] = useState(false);

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

  const EndForm = () => {
    return (
      <div className="overlay-before-video">
        <div className="end-form-after-ending">
          <p>Поздравляем, ты завершила свою Историю!</p>
        </div>
      </div>
    );
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

  return (
    <div className="container">
      <div className="overlay-after-rift" id="overlay-rift"></div>
      <div className="video-cont">
        <video
          id="video"
          width={800}
          onPlay={handleVidoPlay}
          onEnded={handleVideoEnd}
          style={{ background: "black" }}
        >
          <source src={endingVideo} type="video/mp4" />
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
      {showForm && <EndForm />}
    </div>
  );
};

export default EndingGood;
