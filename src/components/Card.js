import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { title, link, image } = props;

  return (
    <div className="card" style="width: 18rem;">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Learn about {title}</p>
        <Link to={link} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}

export default Card;
