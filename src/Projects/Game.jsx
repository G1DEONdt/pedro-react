import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Game() {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);

  const { data, error } = useSWR(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=25&pageSize=3",
    fetcher
  );

  function searchGame() {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => setSearchedGames(data));
  }
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div className="h-1/2 w-full max-w-screen-lg flex flex-col items-center justify-center gap-6">
        <h1 className="text-6xl p-8">Search for a Game</h1>
        <input
          className="text-black py-2 px-4 w-2/5 rounded-md"
          type="text"
          placeholder="Call of Duty..."
          onChange={(e) => {
            setGameTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            searchGame();
          }}
          className="bg-amber-500 py-2 px-16 rounded-md text-black hover:bg-amber-400"
        >
          Search
        </button>
        <div className="flex gap-4">
          {searchedGames.map((game, key) => {
            return (
              <div className="border rounded-md p-4" key={key}>
                {game.external}
                <img src={game.thumb}></img>
                <p className="text-center">${game.cheapest}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-1/2 w-full flex flex-col items-center">
        <h2 className="text-3xl p-4">Featured Deals 🔥</h2>
        <div className="flex flex-wrap gap-12 w-full justify-between">
          {data &&
            data.map((game, key) => {
              return (
                <div
                  key={key}
                  className="bg-gray-700 p-6 rounded-xl shadow-xl flex flex-col items-center flex-1"
                >
                  <h3 className="font-bold text-lg">{game.internalName}</h3>
                  <img src={game.thumb}></img>
                  <p>Original Price: ${game.normalPrice}</p>
                  <p>Current Sale: ${game.salePrice}</p>
                  <h3 className="font-bold text-lg">
                    {Math.floor(game.savings)}%
                  </h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
