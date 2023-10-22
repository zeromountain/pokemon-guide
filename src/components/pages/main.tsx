import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useGetPokemonListInfiniteQuery } from "../../apis/pokemon/pokemonApi.query";
import { RootState } from "../../store";
import Card from "../molecules/card";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import SearchInput from "../molecules/searchInput";
import Modal from "../molecules/modal";
import { setSearch } from "../../store/searchSlice";

function Main() {
  const [searchParams] = useSearchParams();
  const { search } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetPokemonListInfiniteQuery({
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

  React.useEffect(() => {
    if (!searchParams.get("q")) return;
    if (searchParams.get("q") === search) return;
    const queryString = searchParams.get("q") || "";

    dispatch(setSearch(queryString));
  }, [searchParams, search, dispatch]);

  return (
    <div className="main-container">
      <SearchInput />
      {isLoading ? (
        <Modal isLoading={isLoading}>
          <div>로딩중입니다.</div>
        </Modal>
      ) : (
        <ul className="card-list">
          {pokemonList?.map((pokemon, index) => (
            <Card key={`${pokemon?.name}-${index}`} pokemon={pokemon} />
          ))}
          <div ref={targetRef} />
        </ul>
      )}
    </div>
  );
}

export default Main;
