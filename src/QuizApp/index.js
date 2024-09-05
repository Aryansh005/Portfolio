import React, { useEffect, useState } from "react";
import "./style.css";
import Ques from "./components/question";
import questions from "./constants/questions.json";
import Result from "./components/result";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState([]);

  const onNextClick = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setResult([...result, isCorrect]);
    console.log("=====>", result);
  };
  return (
    <div className="heading">
     
      {currentQuestion < questions.length && (
        <Ques question={questions[currentQuestion]} onNextClick={onNextClick} />
      )}
      {currentQuestion === questions.length && (
        <Result
        result={result}
        questions={questions}
        />
      )}
    </div>
  );
};

export default QuizApp;
