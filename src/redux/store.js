import {configureStore, createSlice} from "@reduxjs/toolkit";

const test = createSlice({
  name: "test",
  initialState: "hello",
});

const item = createSlice({
  name: "item",
  initialState: ["apple", "banana"],
});

export default configureStore({
  reducer: {
    test: test.reducer,
    item: item.reducer,
  },
});
