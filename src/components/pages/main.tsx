import React from "react";

import { useGetPokemonListInfiniteQuery } from "../../apis/pokemon/pokemonApi.query";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Card from "../molecules/card";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import SearchInput from "../molecules/searchInput";

function Main() {
  const { search } = useSelector((state: RootState) => state.search);

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

  const targetRef = React.useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  const pokemonList = React.useMemo(() => {
    if (data?.pages?.[0].results) {
      return data?.pages
        .flatMap((page) => page.results)
        .map((pokemon, index) => ({
          name: pokemon?.name,
          id: index + 1,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));
    } else {
      return data?.pages.map((page) => ({
        name: page?.name,
        id: page?.id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${page?.id}.png`,
      }));
    }
  }, [data]);

  return (
    <div className="main-container">
      <SearchInput />
      <ul className="card-list">
        {pokemonList?.map((pokemon, index) => (
          <Card key={`${pokemon?.name}-${index}`} pokemon={pokemon} />
        ))}
        <div ref={targetRef} />
      </ul>
    </div>
  );
}

export default Main;
