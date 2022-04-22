import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

function Card(props) {
  const { object, test, score } = props;
  let text;
  test ? (text = "Test you knowledge of ") : (text = "Learn about ");
  let button;
  test ? (button = "Start Quiz") : (button = "Learn");
  let url;
  test ? (url = `/quiz/${object.id}`) : (url = `/learn/${object.id}`);

  return (
    <div className="card mt-3 mb-3">
      <img
        src={object.image}
        className="card-img-top"
        alt="..."
        style={{
          width: "100%",
          height: "40vh",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ maxHeight: "20px" }}>
          {object.title}
        </h5>
        <p className="card-text">{text + object.id}</p>
        <ProgressBar
          striped
          variant="info"
          now={score[object.id]}
          label="Progress"
          className="mb-3"
        />
        <Link to={url} className="btn btn-outline-secondary">
          {button}
        </Link>
      </div>
    </div>
  );
}

export default Card;
