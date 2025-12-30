import React from "react";

const BlockBeforeVideo = ({ levelData, closeBeforeVideoOverlay }) => {
  return (
    <div className="overlay-before-video" id="overlay-before-video">
      <div className="container-before-video" id="container-before-video">
        <div className="text-cont">
          {levelData.textBeforeVideo.map((text) => {
            return <p>{text}</p>;
          })}
        </div>
        <div className="inputBlock">
          <button className="submitBtn" onClick={closeBeforeVideoOverlay}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockBeforeVideo;
