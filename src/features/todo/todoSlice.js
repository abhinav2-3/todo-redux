import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Namaste India" }],
};

export const todoSclice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateToDo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addToDo, removeToDo, updateToDo } = todoSclice.actions;

export default todoSclice.reducer;
