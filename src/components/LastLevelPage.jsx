import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlockBeforeVideo from "./BlockBeforeVideo";
import ChoiseFinalForm from "./ChoiseFinalForm";

const LastLevelPage = ({ Story, levelData, score }) => {
  const [showForm, setShowForm] = useState(false);
  const [showOverlayBeforeVideo, setShowOverlayBeforeVideo] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    document.querySelector("#overlay-rift").style = "display: none;";
    setShowOverlayBeforeVideo(true);
  }, [2000]);

  const goToGood = () => {
    navigate(`/ending-good`);
  };

  const goToBad = () => {
    navigate(`/ending-bad`);
  };

  const goToNeutral = () => {
    navigate(`/ending-neutral`);
  };

  const closeBeforeVideoOverlay = (e) => {
    document.querySelector("#container-before-video").style =
      "animation: go-down 1s linear";
    setTimeout(() => {
      document.querySelector("#overlay-before-video").style = "display: none;";
      document.querySelector("#story-cont").className = "story-cont";
    }, [1000]);
  };

  const openEndingForm = () => {
    setShowForm(true);
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
      <div id="story-cont" className="story-cont-dis">
        <p>{Story}</p>
        <button className="goNextBtnEndLevel" onClick={openEndingForm}>
          Идем дальше
        </button>
      </div>
      {showForm && (
        <ChoiseFinalForm
          levelData={levelData}
          goToGood={goToGood}
          goToBad={goToBad}
          goToNeutral={goToNeutral}
          score={score}
        />
      )}
    </div>
  );
};

export default LastLevelPage;
