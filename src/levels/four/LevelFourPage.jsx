import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad4 from "./Bad4";
import Good4 from "./Good4";

const LevelFourPage = ({ score, setScore }) => {
  const location = useLocation();
  const { line } = location.state || {};
  const realScore = score;

  if (line) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    console.log(score);
    return <Good4 />;
  } else if (!line) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    console.log(score);
    return <Bad4 />;
  }
};

export default LevelFourPage;
