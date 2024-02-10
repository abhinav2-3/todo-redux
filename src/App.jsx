import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./features/todo/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    console.log(input);
    setInput("");
  };
  console.log(input);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Basic Todo App</h1>
      <form onSubmit={addToDoHandler} className="flex items-center mb-4">
        <input
          type="text"
          className="w-full border rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
        >
          Add
        </button>
      </form>

      <ul className="list-disc">
        {/* {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input type="checkbox" checked={todo.completed} className="mr-2" />
            <span
              className={
                todo.completed ? "text-gray-500 line-through" : "text-gray-700"
              }
            >
              {todo.text}
            </span>
            <button className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none">
              Remove
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
