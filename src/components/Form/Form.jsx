import React, { useState } from "react";
import "./Form.css";

const Form = ({ addWord, selectedWord }) => {
  const [word, setWord] = useState("");

  const [err, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (word === "" || word.includes(" ")) {
      setError(true);
    } else {
      addWord(word);
      setWord("");
      setError(false);
    }
  };

  const regex = /^[A-Za-z]+$/;

  const handleInput = (e) => {
    const userInput = e.target.value;
    if (regex.test(e.target.value)) {
      setWord(userInput.trim());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleForm} className="userform">
        <input
          type="text"
          placeholder="Please enter a word..."
          value={word}
          onChange={handleInput}
          className={`${err ? "error-border" : ""}`}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="error">
        {err && (
          <span className="error-span">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span> Input cannot be blank</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Form;
