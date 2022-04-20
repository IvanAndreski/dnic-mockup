import React from "react";
import { Link } from "react-router-dom";

function Nav({ setToken }) {
  const handleClick = () => {
    setToken(undefined);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/learn">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz">
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/build">
                Build a computer
              </Link>
            </li>
          </ul>
          <button className="btn btn-danger" onClick={handleClick}>
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
