import React, { useEffect } from "react";

const Result = ({ questions, result }) => {
  const correctAnswer = result.filter((answer) => answer).length;
  useEffect(()=>{
    console.log("===question",questions)
  })
  return (
    <div>
      <h1>Result</h1>
      {/* {correctAnswer.map((answer)=>{(
<li key={answer.isCorrect}></li>
      )})} */}
      Your Correct answer out of 10 is {correctAnswer}
      <p>
        {questions.map((que, idx) => {
         return(<li key={idx} data-correct={questions[idx]}>
            No{idx + 1} : {que.question}
            {/* <b>
                {result[idx]
                  ? ""
                  : `- ${
                      questions.answerOptions.find((ans) => ans.isCorrect).text
                    }`}
              </b> */}
          </li>)
        })}
      </p>
    </div>
  );
};

export default Result;
