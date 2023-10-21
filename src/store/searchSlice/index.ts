import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "SEARCH",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
