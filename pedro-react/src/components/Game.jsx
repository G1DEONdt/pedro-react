import { Questions } from "../helpers/Questions";
import { useState, useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } =
    useContext(GameStateContext);

  function chooseOption(option) {
    setOptionChosen(option);
  }

  function nextQuestion() {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  function finishQuiz() {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl text-center">
        {Questions[currentQuestion].prompt}
      </h1>
      <div className="flex flex-col items-center gap-2 w-full">
        <button
          onClick={() => {
            chooseOption("opt1");
          }}
          className={
            optionChosen == "opt1"
              ? "bg-gray-400 py-2 w-3/4 rounded-lg shadow-lg text-black"
              : "bg-gray-800 py-2 w-3/4 rounded-lg  text-gray-200 hover:bg-gray-400 hover:text-black"
          }
        >
          {Questions[currentQuestion].opt1}
        </button>
        <button
          onClick={() => {
            chooseOption("opt2");
          }}
          className={
            optionChosen == "opt2"
              ? "bg-gray-400 py-2 w-3/4 rounded-lg shadow-lg text-black"
              : "bg-gray-800 py-2 w-3/4 rounded-lg  text-gray-200 hover:bg-gray-400 hover:text-black"
          }
        >
          {Questions[currentQuestion].opt2}
        </button>
        <button
          onClick={() => {
            chooseOption("opt3");
          }}
          className={
            optionChosen == "opt3"
              ? "bg-gray-400 py-2 w-3/4 rounded-lg shadow-lg text-black"
              : "bg-gray-800 py-2 w-3/4 rounded-lg  text-gray-200 hover:bg-gray-400 hover:text-black"
          }
        >
          {Questions[currentQuestion].opt3}
        </button>
        <button
          onClick={() => {
            chooseOption("opt4");
          }}
          className={
            optionChosen == "opt4"
              ? "bg-gray-400 py-2 w-3/4 rounded-lg shadow-lg text-black"
              : "bg-gray-800 py-2 w-3/4 rounded-lg  text-gray-200 hover:bg-gray-400 hover:text-black"
          }
        >
          {Questions[currentQuestion].opt4}
        </button>

        {currentQuestion != Questions.length - 1 ? (
          <button
            onClick={() => {
              nextQuestion();
            }}
            className="bg-amber-600 w-2/4 py-2 rounded-lg shadow-lg hover:bg-amber-400 hover:text-black"
          >
            Current Score {score} →
          </button>
        ) : (
          <button
            onClick={() => {
              finishQuiz();
            }}
            className="bg-amber-600 w-2/4 py-2 rounded-lg shadow-lg hover:bg-amber-400 hover:text-black"
          >
            Finish Quiz {score} →
          </button>
        )}
      </div>
    </div>
  );
}
