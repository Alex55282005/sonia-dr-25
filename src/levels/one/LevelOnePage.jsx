import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bad1 from "./Bad1";
import Good1 from "./Good1";

const LevelOnePage = ({ score, setScore }) => {
  const location = useLocation();
  const { passed } = location.state || {};
  const realScore = score;

  if (passed) {
    useEffect(() => {
      setScore(realScore + 1);
    }, []);
    console.log(score);
    return <Good1 />;
  } else if (!passed) {
    useEffect(() => {
      setScore(realScore - 1);
    }, []);
    console.log(score);
    return <Bad1 />;
  }
};

export default LevelOnePage;
