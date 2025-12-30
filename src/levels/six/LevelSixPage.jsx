import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad6 from "./Bad6";
import Good6 from "./Good6";

const LevelSixPage = ({ score, setScore }) => {
  const location = useLocation();
  const { line } = location.state || {};
  const realScore = score;

  if (line) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    console.log(score);
    return <Good6 />;
  } else if (!line) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    console.log(score);
    return <Bad6 />;
  }
};

export default LevelSixPage;
