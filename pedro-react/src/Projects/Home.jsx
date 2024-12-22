import React from "react";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-12">
      <h1 className="text-8xl text-gray-300">Projects</h1>
      <p className="text-2xl text-gray-500">
        Collection by{" "}
        <a
          className="text-3xl text-gray-400 hover:text-gray-200"
          href="https://github.com/G1DEONdt"
        >
          g1deon
        </a>{" "}
        following a course by{" "}
        <a
          className="text-3xl text-gray-400 hover:text-gray-200"
          href="https://www.youtube.com/@PedroTechnologies"
        >
          PedroTech
        </a>{" "}
      </p>
    </div>
  );
}
