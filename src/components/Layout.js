import React, { useState } from "react";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import Learn from "./Learn";
import Quiz from "./Quiz";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Lorem from "./Lorem";

function Layout() {
  const [loggedIn, setLoggedIn] = useState(false);

  return !loggedIn ? (
    <div className="container">
      <Login setLoggedIn={setLoggedIn} />
    </div>
  ) : (
    <React.Fragment>
      <BrowserRouter>
        <Nav setLoggedIn={setLoggedIn} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/learn/:title" element={<Lorem />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/build" />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Layout;
