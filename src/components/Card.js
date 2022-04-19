import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { object, test } = props;
  let text;
  test ? (text = "Test you knowledge of ") : (text = "Learn about ");
  let button;
  test ? (button = "Start Quiz") : (button = "Learn");
  let url;
  test ? (url = "Start Quiz") : (url = `/learn/${object.title}`);

  return (
    <div className="card">
      <img
        src={object.image}
        className="card-img-top"
        alt="..."
        width="150px"
        height="90px"
      />
      <div className="card-body">
        <h5 className="card-title" style={{ maxHeight: "20px" }}>
          {object.title}
        </h5>
        <p className="card-text">{text + object.id}</p>
        <Link to={url} className="btn btn-primary">
          {button}
        </Link>
      </div>
    </div>
  );
}

export default Card;
