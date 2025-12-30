import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad7 from "./Bad7";
import Good7 from "./Good7";

const LevelSevenPage = ({ score, setScore }) => {
  const location = useLocation();
  const { line } = location.state || {};
  const realScore = score;

  if (line) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    console.log(score);
    return <Good7 />;
  } else if (!line) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    console.log(score);
    return <Bad7 />;
  }
};

export default LevelSevenPage;
