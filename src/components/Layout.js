import React, { useState } from "react";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
            <Route path="/learn" />
            <Route path="/quiz" />
            <Route path="/build" />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Layout;
