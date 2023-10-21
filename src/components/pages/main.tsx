import React from "react";

import { useGetPokemonListInfiniteQuery } from "../../apis/pokemon/pokemonApi.query";
import { pokemonSlice } from "../../store/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Card from "../molecules/card";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import SearchInput from "../molecules/searchInput";

function Main() {
  const dispatch = useDispatch();

  const { search } = useSelector((state: RootState) => state.search);

  const { pokemon: pokemons } = useSelector(
    (state: RootState) => state.pokemon
  );

  const { data, fetchNextPage, hasNextPage } = useGetPokemonListInfiniteQuery({
    variables: {
      search,
    },
    options: {
      onSuccess: (data) => {
        console.log("success", { data });
      },
      onError: (error) => {
        console.log("error", { error });
      },
    },
  });

  console.log({ search, data });

  const targetRef = React.useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

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
  }, [data, dispatch]);

  return (
    <div className="main-container">
      <SearchInput />
      <ul className="card-list">
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
        <div ref={targetRef} />
      </ul>
    </div>
  );
}

export default Main;
