import React from "react";
import { PokemonType } from "../../../store/pokemonSlice";
import { Link } from "react-router-dom";
import { useGetPokemonSpeciesQuery } from "../../../apis/pokemon/pokemonApi.query";

interface CardProps {
  pokemon: PokemonType;
}

export default function Card({ pokemon }: CardProps) {
  const { data } = useGetPokemonSpeciesQuery({
    variables: pokemon.name,
    options: {
      enabled: !!pokemon.name,
    },
  });

  const koreanName = data?.names.filter((name) => {
    return name.language.name === "ko";
  })[0].name;

  console.log({ data, koreanName });

  return (
    <Link to={`/${pokemon.id}`}>
      <div className="card" key={pokemon.name}>
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
        <p>No.{pokemon.id.toString().padStart(4, "0")}</p>
        <p>{koreanName}</p>
      </div>
    </Link>
  );
}
