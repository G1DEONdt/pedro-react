import { useEffect, useState } from "react";
import Home from "./Projects/Home";
import Hero from "./Projects/Hero";
import Todo from "./Projects/Todo";
import Quiz from "./Projects/Quiz";
import Space from "./Projects/Space";
import Game from "./Projects/Game";

export default function App() {
  const [page, setPage] = useState("home");

  function renderPage(page) {
    setPage(page);
  }

  return (
    <>
      <div className="w-screen h-16 bg-gray-950 shadow-xl flex justify-center">
        <button
          onClick={() => renderPage("home")}
          className="px-8 hover:bg-gray-600"
        >
          Home
        </button>
        <button
          onClick={() => renderPage("hero")}
          className="px-8 hover:bg-gray-600"
        >
          Hero
        </button>
        <button
          onClick={() => renderPage("todo")}
          className="px-8 hover:bg-gray-600"
        >
          Todo
        </button>
        <button
          onClick={() => renderPage("quiz")}
          className="px-8 hover:bg-gray-600"
        >
          Quiz
        </button>
        <button
          onClick={() => renderPage("space")}
          className="px-8 hover:bg-gray-600"
        >
          Space
        </button>
        <button
          onClick={() => renderPage("game")}
          className="px-8 hover:bg-gray-600"
        >
          Game
        </button>
      </div>
      <div className="w-screen max-w-screen-lg h-full overflow-auto scrollbar-hide">
        {page === "home" && <Home></Home>}
        {page === "hero" && <Hero></Hero>}
        {page === "todo" && <Todo></Todo>}
        {page === "quiz" && <Quiz></Quiz>}
        {page === "space" && <Space></Space>}
        {page === "game" && <Game></Game>}
      </div>
    </>
  );
}
