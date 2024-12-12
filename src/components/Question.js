import React from "react";

function Question({ question, options, selectedOption, onSelect }) {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => onSelect(option)}
            style={{
              backgroundColor: selectedOption === option ? "#ddd" : "#fff",
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
