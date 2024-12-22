import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

export default function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <label className="text-2xl">Enter your name: </label>
      <input
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        className="bg-slate-800 py-2 px-4 rounded-lg w-1/2 min-w-48 text-white"
        type="text"
        placeholder="Name..."
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
        className="bg-amber-600 w-2/4 py-2 rounded-lg shadow-lg hover:bg-amber-400 hover:text-black"
      >
        Start Quiz
      </button>
    </div>
  );
}
