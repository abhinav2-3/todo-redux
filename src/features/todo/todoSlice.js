import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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
  },
});

export const { addToDo, removeToDo } = todoSclice.actions;

export default todoSclice.reducer;
