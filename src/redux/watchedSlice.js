import {createSlice} from "@reduxjs/toolkit";

const watched = createSlice({
  name: "watched",
  initialState: [],
  reducers: {
    setWatched(state, action) {
      return action.payload;
    },
  },
});

export const {setWatched} = watched.actions;
export default watched;
