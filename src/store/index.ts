import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemonSlice";
import { searchSlice } from "./searchSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    search: searchSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
