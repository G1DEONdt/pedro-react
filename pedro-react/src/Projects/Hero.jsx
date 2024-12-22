import { useState } from "react";

function Hero() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setSuperpower] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center bg-gray-900 p-12 rounded-xl shadow-xl">
        <h1 className="text-6xl">Build a Hero</h1>
        <div className="flex flex-col gap-2 p-4">
          <div className="w-full flex gap-6 justify-end">
            <label>Name: </label>
            <input
              className="text-black py-1 px-2 rounded-md shadow-md"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="w-full flex gap-6 justify-end">
            <label>Age: </label>
            <input
              className="text-black py-1 px-2 rounded-md shadow-md"
              onChange={(e) => setAge(e.target.value)}
              type="number"
            />
          </div>
          <div className="w-full flex gap-6 justify-end">
            <label>Height: </label>
            <input
              className="text-black py-1 px-2 rounded-md shadow-md"
              onChange={(e) => setHeight(e.target.value)}
              type="number"
            />
          </div>
          <div className="w-full flex gap-6 justify-end">
            <label>Superpower: </label>
            <input
              className="text-black py-1 px-2 rounded-md shadow-md"
              onChange={(e) => setSuperpower(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <button
          className="bg-amber-600 py-2 px-6 rounded-lg shadow-lg hover:bg-amber-400 hover:text-black"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          Display Character
        </button>
        <div className="w-full">
          {display && (
            <>
              <h2 className="text-4xl text-center p-4">Charactersheet</h2>
              <div className="w-full flex justify-center gap-12">
                <div className="flex flex-col items-end">
                  <div className="flex gap-4">
                    <p className="text-gray-400">Name:</p>
                    <p className="text-gray-300 font-bold">{name}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-gray-400">Age:</p>
                    <p className="text-gray-300 font-bold">{age}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-gray-400">Height:</p>
                    <p className="text-gray-300 font-bold">{height}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-gray-400">Superpower:</p>
                    <p className="text-gray-300 font-bold">{superpower}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-2xl leading-none">
                  <p>O</p>
                  <p>/|\</p>
                  <p>/ \</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
