import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

export default function EndScreen() {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  function restart() {
    setGameState("menu");
    setScore(0);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Quiz Complete!</h1>
      <h2>
        Your score was {score} out of {Questions.length}!
      </h2>
      <button
        onClick={() => {
          restart();
        }}
        className="bg-amber-600 w-2/4 py-2 rounded-lg shadow-lg hover:bg-amber-400 hover:text-black"
      >
        Try Again
      </button>
    </div>
  );
}
