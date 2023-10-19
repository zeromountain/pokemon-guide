import { AxiosInstance } from "axios";
import instance from "../instance";
import {
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
    limit?: number;
    offset?: number;
  }): Promise<PokemonListResponseType> => {
    const { data } = await this.axios({
      method: "GET",
      url: "/pokemon",
      params: {
        limit: 24,
        ...params,
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

  getPokemonInfoById = async (id?: number) => {
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
}

const pokemonApi = new PokemonApi();

export default pokemonApi;
