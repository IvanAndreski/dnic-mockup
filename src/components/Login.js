import React from "react";

function Login(props) {
  const { setToken } = props;
  const handleClick = () => {
    setToken("yes");
  };

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-dark text-light">
          <div className="" style={{ float: "left" }}>
            Log in: (For demonstration purposes only. Entering any value will
            log you in!)
          </div>
        </li>
        <li className="list-group-item">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
        </li>
        <li className="list-group-item">
          <button
            className="btn btn-info text-light"
            style={{ float: "left" }}
            onClick={handleClick}
          >
            Log in
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Login;
