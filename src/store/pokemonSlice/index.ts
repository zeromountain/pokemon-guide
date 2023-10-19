import { createSlice } from "@reduxjs/toolkit";

export type PokemonType = {
  name: string;
  image: string;
  id: number;
};

export interface PokemonState {
  pokemon: PokemonType[];
}

const initialState: PokemonState = {
  pokemon: [],
};

export const pokemonSlice = createSlice({
  name: "POKEMON",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
