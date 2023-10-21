import { AxiosInstance } from "axios";
import instance from "../instance";
import {
  EvolutionChain,
  Pokemon,
  PokemonListResponseType,
  PokemonSpeciesType,
} from "./pokemon.type";

class PokemonApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getPokemonList = async (params?: {
    offset?: number;
    search?: string;
  }): Promise<PokemonListResponseType | Pokemon> => {
    const { search } = params || {};
    let url = "/pokemon";

    if (search) {
      if (search.length > 0) {
        url = `${url}/${search}`;
      }
    }

    const { data } = await this.axios({
      method: "GET",
      url,
      params: {
        limit: 24,
        offset: params?.offset,
      },
    });

    return data;
  };

  getPokemonInfoByName = async (name?: string): Promise<Pokemon> => {
    const { data } = await this.axios({
      method: "GET",
      url: `/pokemon/${name}`,
    });

    return data;
  };

  getPokemonInfoById = async (id?: number): Promise<Pokemon> => {
    const { data } = await this.axios({
      method: "GET",
      url: `/pokemon/${id}`,
    });

    return data;
  };

  getPokemonSpecies = async (name?: string): Promise<PokemonSpeciesType> => {
    // const pokemonName = getPartPokemonName(name);
    const { data } = await this.axios({
      method: "GET",
      url: `/pokemon-species/${name}`,
    });

    return data;
  };

  getPokemonEvolutionChain = async (id?: number): Promise<EvolutionChain> => {
    const { data } = await this.axios({
      method: "GET",
      url: `/evolution-chain/${id}`,
    });

    return data;
  };
}

const pokemonApi = new PokemonApi();

export default pokemonApi;
