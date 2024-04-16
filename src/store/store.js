import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import { loadState, saveState } from "./localStorage";

// Load the persisted state from local storage
const persistedState = loadState();

// Create the Redux store with persisted state
const store = configureStore({
  reducer: { blogs: blogReducer },
  preloadedState: persistedState,
});

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;