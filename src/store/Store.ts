import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
  name: "todoList",
  initialState: [] as string[],
  reducers: {
    handlerTodoList(state, action) {
      let todoListContent: string = action.payload;
      state.push(todoListContent);
    },
    handlerDeleteList(state, action) {
      let newState = action.payload;
      return state.filter((value) => newState.includes(value));
    },
  },
});
export let { handlerTodoList, handlerDeleteList } = todoList.actions;

const store = configureStore({
  reducer: {
    todoList: todoList.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
