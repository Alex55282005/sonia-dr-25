import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad2 from "./Bad2";
import Good2 from "./Good2";

const LevelTwoPage = ({ score, setScore }) => {
  const location = useLocation();
  const { line } = location.state || {};
  const realScore = score;

  if (line) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    console.log(score);

    return <Good2 />;
  } else if (!line) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    console.log(score);
    return <Bad2 />;
  }
};

export default LevelTwoPage;
