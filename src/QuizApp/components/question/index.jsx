import React, { useEffect, useState } from "react";

const Ques = ({ question, onNextClick = () => {} }) => {
  const [seconds, setSeconds] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds > 0 ? prevSeconds - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Reset timer when a new question is received
    setSeconds(25);
  }, [question]);

  return (
    <>
      <div className="question">
        Tick the correct option...
        <p>{question?.question}</p>
        <ul className="options">
          {question.answerOptions.map((option) => {
            return (
              <li
                style={{ cursor: "pointer" }}
                onClick={() => onNextClick(option.isCorrect)}
                key={option.text}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
        {seconds === 0 ? (
          <p>Time's up!</p>
        ) : (
          <button
            style={{
              display: "flex",
              border: "2px solid black",
              padding: "2rem",
              fontSize: "xxx-large"
            }}
          >
            <span>Countdown</span> <span>{seconds}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Ques;
