import React from "react";
import { PokemonType } from "../../../store/pokemonSlice";
import { useNavigate } from "react-router-dom";
import {
  useGetPokemonInfoByNameQuery,
  useGetPokemonSpeciesQuery,
} from "../../../apis/pokemon/pokemonApi.query";
import POKEMON_TYPE_MAP from "../../../constants/pokemon-type-map";

interface CardProps {
  isNumber?: boolean;
  isLinking?: boolean;
  pokemon: PokemonType;
}

export default function Card({
  pokemon,
  isNumber = true,
  isLinking = true,
}: CardProps) {
  const navigate = useNavigate();
  const { data: pokemonInfo } = useGetPokemonInfoByNameQuery({
    variables: pokemon.name,
    options: {
      enabled: !!pokemon.name,
    },
  });

  const { data } = useGetPokemonSpeciesQuery({
    variables: pokemonInfo?.species.name,
    options: {
      enabled: !!pokemonInfo?.species.name,
    },
  });

  const koreanName = data?.names.filter((name) => {
    return name.language.name === "ko";
  })[0].name;

  console.log({ data, koreanName, pokemonInfo });

  const handleNavigate = React.useCallback(() => {
    if (!isLinking) return;
    navigate(`/${pokemon.id}`);
  }, [isLinking, navigate, pokemon.id]);

  return (
    <div className="card" key={pokemon.name} onClick={handleNavigate}>
      <img
        src={
          pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
            ?.animated?.front_default ||
          pokemonInfo?.sprites?.front_default ||
          "/pokeball.png"
        }
        alt={pokemon.name}
        width={
          pokemonInfo?.sprites?.versions?.["generation-v"]?.["black-white"]
            ?.animated?.front_default
            ? 100
            : 120
        }
        height={120}
        loading="lazy"
      />
      <div>
        {isNumber && <p>No.{pokemon.id.toString().padStart(4, "0")}</p>}
        <h3>{koreanName}</h3>
        <div className="types">
          {pokemonInfo?.types?.map((type, index) => (
            <span key={index} className={`type ${type.type.name}`}>
              {POKEMON_TYPE_MAP[type.type.name]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
