import { AxiosInstance } from "axios";
import instance from "../instance";
import { PokemonListResponseType, PokemonSpeciesType } from "./pokemon.type";

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
        limit: 20,
        ...params,
      },
    });

    return data;
  };

  getPokemonInfoByName = async (name?: string) => {
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
    const { data } = await this.axios({
      method: "GET",
      url: `/pokemon-species/${name}`,
    });

    return data;
  };
}

const pokemonApi = new PokemonApi();

export default pokemonApi;
