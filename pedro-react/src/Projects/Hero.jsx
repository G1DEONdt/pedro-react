import { useState } from "react";

function Hero() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setSuperpower] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl">Build a Hero</h1>
        <div>
          <label>Name: </label>
          <input
            className="text-black"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            className="text-black"
            onChange={(e) => setAge(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <label>Height: </label>
          <input
            className="text-black"
            onChange={(e) => setHeight(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <label>Superpower: </label>
          <input
            className="text-black"
            onChange={(e) => setSuperpower(e.target.value)}
            type="text"
          />
        </div>
        <button
          onClick={() => {
            setDisplay(!display);
          }}
        >
          Display Character
        </button>
        <div>
          <h2>Hero Info</h2>
          {display && (
            <ul>
              <li>Name: {name}</li>
              <li>Age : {age}</li>
              <li>Height: {height}</li>
              <li>Superpower: {superpower}</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
