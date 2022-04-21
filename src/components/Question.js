import React from "react";

function Question({ i }) {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <ul
          className="list-group"
          style={{ width: "18em", marginBottom: "10px" }}
        >
          <li className="list-group-item">
            <h5>Question {i}</h5>
          </li>
          <li className="list-group-item">
            <input type="radio" name={`question ${i}`} />
            <span>Answer 1</span>
          </li>
          <li className="list-group-item">
            <input type="radio" name={`question ${i}`} />
            <span>Answer 2</span>
          </li>
          <li className="list-group-item">
            <input type="radio" name={`question ${i}`} />
            <span>Answer 3</span>
          </li>
          <li className="list-group-item">
            <input type="radio" name={`question ${i}`} />
            <span>Answer 4</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Question;
