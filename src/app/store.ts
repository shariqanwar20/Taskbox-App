import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../components/TaskSlice";

export const store = configureStore({
  reducer: taskReducer,
});
