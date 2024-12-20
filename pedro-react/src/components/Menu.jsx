import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

export default function Menu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="bg-gray-300 w-1/2 min-w-96 h-2/3 rounded-lg p-6 flex flex-col justify-center items-center gap-4">
      <label className="text-black text-2xl">Enter your name: </label>
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
        className="bg-gray-800 py-2 px-8 rounded-lg  hover:bg-gray-700"
      >
        Start Quiz
      </button>
    </div>
  );
}
