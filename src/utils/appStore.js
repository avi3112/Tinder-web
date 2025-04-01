import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionsreducer from "./connectionsSlice";
import requestReducer from "./requestSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsreducer,
    requests: requestReducer,
  },
});

export default appStore;
