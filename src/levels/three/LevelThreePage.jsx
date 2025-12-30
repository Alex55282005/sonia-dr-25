import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad3 from "./Bad3";
import Good3 from "./Good3";

const LevelThreePage = ({ score, setScore }) => {
  const location = useLocation();
  const { line } = location.state || {};
  const realScore = score;

  if (line) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    console.log(score);
    return <Good3 />;
  } else if (!line) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    console.log(score);
    return <Bad3 />;
  }
};

export default LevelThreePage;
