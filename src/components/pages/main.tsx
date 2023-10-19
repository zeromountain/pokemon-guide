import React from "react";

import { useGetPokemonListInfiniteQuery } from "../../apis/pokemon/pokemonApi.query";
import { pokemonSlice } from "../../store/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Card from "../molecules/card";

function Main() {
  const dispatch = useDispatch();
  const { data } = useGetPokemonListInfiniteQuery({
    variables: {
      limit: 20,
    },
  });
  const { pokemon: pokemons } = useSelector(
    (state: RootState) => state.pokemon
  );

  React.useEffect(() => {
    const pokemonList = data?.pages
      .flatMap((page) => page.results)
      .map((pokemon, index) => ({
        name: pokemon.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
    dispatch(pokemonSlice.actions.setPokemon(pokemonList));
    console.log({ pokemonList });
  }, [data, dispatch]);

  return (
    <div>
      <h1>포켓몬 도감</h1>
      <div>
        <ul className="card-list">
          {pokemons?.map((pokemon) => (
            // 카드 컴포넌트
            <Card key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
