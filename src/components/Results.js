import React from "react";

function Results({ quizData, selectedAnswers }) {
  return (
    <div>
      <h1>Results</h1>
      <ul>
        {quizData.map((q, index) => (
          <li key={index}>
            <p><strong>Q:</strong> {q.question}</p>
            <p><strong>Your Answer:</strong> {selectedAnswers[index] || "Not Answered"}</p>
            <p><strong>Correct Answer:</strong> {q.answer}</p>
            <p style={{ color: q.answer === selectedAnswers[index] ? "green" : "red" }}>
              {q.answer === selectedAnswers[index] ? "Correct" : "Wrong"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
