import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad5 from "./Bad5";
import Good5 from "./Good5";

const LevelFivePage = ({ score, setScore }) => {
  const location = useLocation();
  const { line } = location.state || {};
  const realScore = score;

  if (line) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    console.log(score);
    return <Good5 />;
  } else if (!line) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    console.log(score);
    return <Bad5 />;
  }
};

export default LevelFivePage;
