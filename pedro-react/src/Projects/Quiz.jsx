import { useState } from "react";
import { GameStateContext } from "../helpers/Contexts";
import Menu from "../components/Menu";
import Game from "../components/Game";
import EndScreen from "../components/EndScreen";

export default function Quiz() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl">Quiz App</h1>
      <div className="bg-gray-900 w-1/2 h-1/2 p-12 rounded-lg shadow-lg flex flex-col justify-center">
        <GameStateContext.Provider
          value={{
            gameState,
            setGameState,
            userName,
            setUserName,
            score,
            setScore,
          }}
        >
          {gameState === "menu" && <Menu />}
          {gameState === "playing" && <Game />}
          {gameState === "finished" && <EndScreen />}
        </GameStateContext.Provider>
      </div>
    </div>
  );
}
