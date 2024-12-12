import React, { useState } from "react";
import { quizData } from "./data/quizData";
import Timer from "./components/Timer";
import Question from "./components/Question";
import Results from "./components/Results";

function App() {
  const [timerDuration, setTimerDuration] = useState(60);
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setTimeLeft(timerDuration);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };
  const handleAnswerSelect = (option) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowQuiz(false);
      setShowResults(true);
    }
  };

  const handleTimeUp = (newTimeLeft) => {
    setTimeLeft(newTimeLeft);

    if (newTimeLeft <= 0) {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setShowQuiz(false);
        setShowResults(true);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {!showQuiz && !showResults ? (
        <div className="quiz">
          <h1 className="play-quiz">Play Quiz</h1>
          <label className="Label">
            Select Timer Duration (minutes):{" "}
            <select
              value={timerDuration / 60} // Display in minutes
              onChange={(e) => setTimerDuration(Number(e.target.value) * 60)} // Convert minutes to seconds
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <button onClick={handleStartQuiz}>Play Quiz</button>
        </div>
      ) : showQuiz ? (
        <div>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            selectedOption={selectedAnswers[currentQuestion]}
            onSelect={handleAnswerSelect}
          />
          <Timer timeLeft={timeLeft} onTimeUp={handleTimeUp} />
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestion]}
          >
            Next
          </button>
        </div>
      ) : (
        <Results quizData={quizData} selectedAnswers={selectedAnswers} />
      )}
    </div>
  );
}

export default App;