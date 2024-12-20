import { useState } from "react";
import { GameStateContext } from "../helpers/Contexts";
import Menu from "../components/Menu";
import Game from "../components/Game";

export default function Quiz() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl">Quiz App</h1>
      <GameStateContext.Provider
        value={{ gameState, setGameState, userName, setUserName }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Game />}
      </GameStateContext.Provider>
    </div>
  );
}
