import { useState, useRef, useEffect } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (index) => {
    setTodoList((s) => {
      let arr = [...s];
      console.log(arr);
      arr.splice(index, 1);
      return arr;
    });
  };

  const completeTask = (index) => {
    setTodoList((s) => {
      let arr = [...s];
      arr[index].completed = true;
      return arr;
    });
  };

  return (
    <div className="w-full h-full flex flex-col p-12 gap-6 items-center">
      <h1 className="text-4xl text-center">Todo List</h1>
      <div>
        <input
          ref={inputTask}
          className="text-black py-1 px-2 mx-4 w-80"
          type="text"
          placeholder="Enter your task..."
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button
          className="bg-amber-500 py-1 px-4 text-black hover:bg-amber-400"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <hr className="w-full border" />
      <ul className="w-full flex flex-col gap-2 items-center">
        {todoList.map((value, index) => {
          return (
            <div key={index} className="flex">
              <li className="bg-gray-200 text-black py-2 px-4 w-80">
                {value.task}
              </li>
              {!value.completed ? (
                <button
                  className="bg-amber-500 py-2 px-4 text-black hover:bg-amber-400"
                  onClick={() => completeTask(index)}
                >
                  Complete
                </button>
              ) : (
                <button
                  className="bg-amber-200 py-2 px-4 text-black hover:bg-amber-400"
                  onClick={() => completeTask(index)}
                >
                  Completed
                </button>
              )}
              <button
                className="bg-amber-500 py-2 px-4 text-black hover:bg-amber-400"
                onClick={() => {
                  deleteTask(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
