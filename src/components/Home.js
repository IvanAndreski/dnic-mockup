import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/2048px-Blue_computer_icon.svg.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold">Welcome</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly learn everything you need to know about choosing components for your
            new computer. Resources are available for every single component.
            After finishing with every quiz, you will be able to build you
            perfect computer!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              to="/learn"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
