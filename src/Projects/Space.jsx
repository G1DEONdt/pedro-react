import { useEffect, useState } from "react";

export default function Space() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-6 my-12">
      <div className="w-full flex justify-center bg-gray-900 p-6 rounded-xl shadow-xl">
        <h1 className="text-gray-300 text-4xl font-bold">Space News</h1>
      </div>
      <div className="w-full bg-gray-900 py-12 rounded-xl shadow-xl flex flex-col items-center gap-12">
        {newsList.map((value, key) => {
          return (
            <div
              onClick={() => {
                window.location.href = value.url;
              }}
              className="border border-gray-700 rounded-md flex flex-col items-center gap-4 w-3/4 max-w-6xl p-12 cursor-pointer hover:bg-gray-800 shadow-"
              key={key}
            >
              <h2 className="w-3/4 text-center text-gray-300 text-4xl font-bold">
                {value.title}
              </h2>
              <img className="w-3/4" src={value.image_url}></img>
              <p className="w-3/4 text-center text-gray-500">{value.summary}</p>
              <h4 className="text-center text-gray-700 font-bold">
                {value.published_at}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
