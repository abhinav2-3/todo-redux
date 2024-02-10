import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo } from "./features/todo/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };

  const todoList = useSelector((state) => state.todos);

  return (
    <div className="container mx-auto p-4 bg-zinc-900 w-full h-screen">
      <h1 className="text-3xl text-white font-bold mb-4">Basic Todo App</h1>
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
        {todoList.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <span className="text-white">{todo.text}</span>
            <button
              onClick={() => dispatch(removeToDo(todo.id))}
              className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md focus:outline-none"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
