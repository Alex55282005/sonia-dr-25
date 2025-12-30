import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad8 from "./Bad8";
import Good8 from "./Good8";

const LevelEightPage = ({ score, setScore }) => {
  const location = useLocation();
  const { line } = location.state || {};
  const realScore = score;

  if (line) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    return <Good8 score={realScore} />;
  } else if (!line) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    return <Bad8 score={realScore} />;
  }
};

export default LevelEightPage;
