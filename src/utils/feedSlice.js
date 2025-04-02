import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  // initialState: null,
  initialState: {
    feed: [], // Ensure it's an array
  },
  reducers: {
    addFeed: (state, action) => action.payload || [],
    removeUserFeed: (state, action) => {
      const newFeed = state.filter((user) => user.id !== action.payload);
      return newFeed;
    },
  },
});

export const { addFeed, removeUserFeed } = feedSlice.actions;

export default feedSlice.reducer;
