import pokemonApi from "./pokemonApi";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { UseQueryParams } from "../../types/react-query/use-query";

export const POKEMON_QUERY_KEY = {
  GET_POKEMON_LIST: ["POKEMON_LIST"],
  GET_POKEMON_INFO_BY_NAME: (name?: string) => ["POKEMON_INFO_BY_NAME", name],
  GET_POKEMON_INFO_BY_ID: (id?: number) => ["POKEMON_INFO_BY_ID", id],
  GET_POKEMON_SPECIES: (name?: string) => ["POKEMON_SPECIES", name],
  GET_POKEMON_EVOLUTION_CHAIN: (id?: number) => ["POKEMON_EVOLUTION_CHAIN", id],
};

export const useGetPokemonListInfiniteQuery = () => {
  const queryKey = POKEMON_QUERY_KEY.GET_POKEMON_LIST;
  return useInfiniteQuery(
    queryKey,
    ({ pageParam = 0 }) =>
      pokemonApi.getPokemonList({
        offset: pageParam,
      }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage) {
          const url = new URL(lastPage.next);
          const offset = url.searchParams.get("offset");
          return offset ? Number(offset) : undefined;
        }

        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};

export const useGetPokemonInfoByNameQuery = (
  params?: UseQueryParams<typeof pokemonApi.getPokemonInfoByName>
) => {
  const queryKey = POKEMON_QUERY_KEY.GET_POKEMON_INFO_BY_NAME(
    params?.variables
  );

  return useQuery(
    queryKey,
    () => pokemonApi.getPokemonInfoByName(params?.variables),
    params?.options
  );
};

export const useGetPokemonInfoByIdQuery = (
  params?: UseQueryParams<typeof pokemonApi.getPokemonInfoById>
) => {
  const queryKey = POKEMON_QUERY_KEY.GET_POKEMON_INFO_BY_ID(params?.variables);

  return useQuery(
    queryKey,
    () => pokemonApi.getPokemonInfoById(params?.variables),
    params?.options
  );
};

export const useGetPokemonSpeciesQuery = (
  params?: UseQueryParams<typeof pokemonApi.getPokemonSpecies>
) => {
  const queryKey = POKEMON_QUERY_KEY.GET_POKEMON_SPECIES(params?.variables);

  return useQuery(
    queryKey,
    () => pokemonApi.getPokemonSpecies(params?.variables),
    params?.options
  );
};

export const useGetPokemonEvolutionChainQuery = (
  params?: UseQueryParams<typeof pokemonApi.getPokemonEvolutionChain>
) => {
  const queryKey = POKEMON_QUERY_KEY.GET_POKEMON_EVOLUTION_CHAIN(
    params?.variables
  );

  return useQuery(
    queryKey,
    () => pokemonApi.getPokemonEvolutionChain(params?.variables),
    params?.options
  );
};
