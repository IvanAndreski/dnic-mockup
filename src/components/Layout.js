import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Learn from "./Learn";
import Quiz from "./Quiz";
import Login from "./Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lorem from "./Lorem";

function Layout() {
  const [token, setToken] = useState();

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
      <BrowserRouter>
        <Nav setToken={setToken}/>
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
