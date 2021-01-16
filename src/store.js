import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

/**
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const reducer = createReducer([], {
  // state object를 return 또는 새로운 state object를 return 해야함
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    state.filter((toDo) => toDo.id !== action.payload);
  },
});

*/

const toDos = createSlice({
  name: "toDosReducer",
  initalState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// const store = createStore(reducer);

/** configureStore: Redux Developer Tools 사용 */
const store = configureStore({ reducer: toDos.reducer });

console.log(toDos.actions);

export const { add, remove } = toDos.actions;

export default store;
