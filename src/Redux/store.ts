import { configureStore } from "@reduxjs/toolkit";
import loadSlice from "./features/loadSlice";
import filterSlice from "./features/filterSlice";

export const store = configureStore({
  reducer: { load: loadSlice, filter: filterSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
