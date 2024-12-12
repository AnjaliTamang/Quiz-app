import React, { useEffect } from "react";

const Timer = ({ timeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        onTimeUp(timeLeft - 1); // Update the timeLeft in the parent component
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft, onTimeUp]);

  return <div>Time Left: {timeLeft} seconds</div>;
};

export default Timer;
