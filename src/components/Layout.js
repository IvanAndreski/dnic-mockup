import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Learn from "./Learn";
import Quiz from "./Quiz";
import Login from "./Login";
import Build from "./Build";

import { HashRouter, Routes, Route } from "react-router-dom";
import Lorem from "./Lorem";
import QuizUser from "./QuizUser";

function Layout() {
  const [token, setToken] = useState();
  const [score, setScore] = useState({
    processors: 0,
    motherboards: 0,
    ram_memory: 0,
    graphics_cards: 0,
    soli_state_drives: 0,
    hard_drives: 0,
    power_supplies: 0,
    pc_cases: 0,
  });

  if (!token) {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <div className="col-md-5">
          <Login setToken={setToken} />
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <HashRouter>
        <Nav setToken={setToken} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/learn/:title" element={<Lorem />} />
            <Route path="/learn" element={<Learn score={score} />} />
            <Route path="/quiz" element={<Quiz score={score} />} />
            <Route
              exact
              path="/quiz/:title"
              element={<QuizUser score={score} setScore={setScore} />}
            />
            <Route path="/build" element={<Build />} />
          </Routes>
        </div>
      </HashRouter>
    </React.Fragment>
  );
}

export default Layout;
