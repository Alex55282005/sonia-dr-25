import React, { useState } from "react";
import endingVideo from "../../assets/video/ending-bad/video.MOV";

const EndingBad = () => {
  console.log("EndingBad");

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

  return (
    <div className="container">
      <div className="overlay-after-rift" id="overlay-rift"></div>
      <div className="video-cont">
        <video
          width={800}
          controls
          onPlay={handleVidoPlay}
          onEnded={handleVideoEnd}
          style={{ background: "black" }}
        >
          <source src={endingVideo} type="video/mp4" />
        </video>
      </div>
      {showForm && <EndForm />}
    </div>
  );
};

export default EndingBad;
