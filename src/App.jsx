import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./styles/index.css";

import StartPage from "./levels/start/start-page";
import LevelOnePage from "./levels/one/LevelOnePage";
import LevelTwoPage from "./levels/two/LevelTwoPage";
import LevelThreePage from "./levels/three/LevelThreePage";
import LevelFourPage from "./levels/four/LevelFourPage";
import LevelFivePage from "./levels/five/LevelFivePage";
import LevelSixPage from "./levels/six/LevelSixPage";
import LevelSevenPage from "./levels/seven/LevelSevenPage";
import LevelEightPage from "./levels/eight/LevelEightPage";
import EndingBad from "./levels/ending-bad/EndingBad";
import EndingGood from "./levels/ending-good/EndingGood";
import EndingNeutral from "./levels/ending-nuetral/EndingNeutral";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="global-container">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/level1"
            element={<LevelOnePage score={score} setScore={setScore} />}
          />
          <Route
            path="/level2"
            element={<LevelTwoPage score={score} setScore={setScore} />}
          />
          <Route
            path="/level3"
            element={<LevelThreePage score={score} setScore={setScore} />}
          />
          <Route
            path="/level4"
            element={<LevelFourPage score={score} setScore={setScore} />}
          />
          <Route
            path="/level5"
            element={<LevelFivePage score={score} setScore={setScore} />}
          />
          <Route
            path="/level6"
            element={<LevelSixPage score={score} setScore={setScore} />}
          />
          <Route
            path="/level7"
            element={<LevelSevenPage score={score} setScore={setScore} />}
          />
          <Route
            path="/level8"
            element={<LevelEightPage score={score} setScore={setScore} />}
          />
          <Route
            path="/ending-bad"
            element={<EndingBad score={score} setScore={setScore} />}
          />
          <Route
            path="/ending-good"
            element={<EndingGood score={score} setScore={setScore} />}
          />
          <Route
            path="/ending-neutral"
            element={<EndingNeutral score={score} setScore={setScore} />}
          />
          {/* <Route path="/results" element={<ResultsPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
