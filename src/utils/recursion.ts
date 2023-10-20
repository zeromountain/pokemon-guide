import { ChainLink } from "../apis/pokemon/pokemon.type";

const recursion = (data?: ChainLink): string[] => {
  if (!data) return [];
  if (data.evolves_to.length === 0) return [data.species.name];
  return [data.species.name, ...recursion(data.evolves_to[0])];
};

export default recursion;
