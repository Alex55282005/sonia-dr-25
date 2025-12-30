import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlockBeforeVideo from "./BlockBeforeVideo";
import ChoiseForm from "./ChoiseForm";

const LevelLinePage = ({ Video, levelData, nextLevel }) => {
  const [showForm, setShowForm] = useState(false);
  const [showOverlayBeforeVideo, setShowOverlayBeforeVideo] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    document.querySelector("#overlay-rift").style = "display: none;";
    setShowOverlayBeforeVideo(true);
  }, [2000]);

  const handleVideoEnd = () => {
    setShowForm(true);
  };

  const handleVidoPlay = (e) => {
    e.target.style.width = "100%";
    e.target.controls = false;
  };

  const goToGood = () => {
    navigate(`/level${nextLevel}`, { state: { line: true } });
  };

  const goToBad = () => {
    navigate(`/level${nextLevel}`, { state: { line: false } });
  };

  const closeBeforeVideoOverlay = (e) => {
    document.querySelector("#container-before-video").style =
      "animation: go-down 1s linear";
    setTimeout(() => {
      document.querySelector("#overlay-before-video").style = "display: none;";
      document.querySelector("#play-video-btn").style.display = "block";
    }, [1000]);
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
      {showOverlayBeforeVideo && (
        <BlockBeforeVideo
          levelData={levelData}
          closeBeforeVideoOverlay={closeBeforeVideoOverlay}
        />
      )}
      <div className="video-cont">
        <video
          width={800}
          onPlay={handleVidoPlay}
          onEnded={handleVideoEnd}
          id="video"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <button
          id="play-video-btn"
          className="play-video-btn"
          onClick={StartPlayVideo}
        >
          Смотреть
        </button>
      </div>
      {showForm && (
        <ChoiseForm
          levelData={levelData}
          goToGood={goToGood}
          goToBad={goToBad}
        />
      )}
    </div>
  );
};

export default LevelLinePage;
