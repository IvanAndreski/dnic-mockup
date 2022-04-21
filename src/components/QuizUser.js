import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Question from "./Question";

function QuizUser() {
  const { title } = useParams();
  const navigate = useNavigate();
  const numQuestions = [1, 2, 3, 4, 5];
  const renderQuestions = () => {
    return numQuestions.map((i) => <Question key={i} i={i} />);
  };

  const handleSubmit = () => {
    const quizResult = Math.floor(Math.random() * 101);

    if (quizResult < 50) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You only got a score of ${quizResult}, you should go back and read the material again!`,
      }).then(() => {
        navigate("/learn");
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: `You passed the test with a score of ${quizResult}!`,
      }).then(() => {
        navigate("/learn");
      });
    }
  };

  return (
    <React.Fragment>
      <h1>Quiz about {title}</h1>
      {renderQuestions()}
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </React.Fragment>
  );
}

export default QuizUser;
