import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetPokemonEvolutionChainQuery,
  useGetPokemonInfoByIdQuery,
  useGetPokemonSpeciesQuery,
} from "../../apis/pokemon/pokemonApi.query";
import recursion from "../../utils/recursion";
import Card from "../molecules/card";
import POKEMON_TYPE_MAP from "../../constants/pokemon-type-map";
import parseSizeInfo from "../../utils/parse-size-info";
import Modal from "../molecules/modal";

function Detail() {
  const { id } = useParams();

  const { data: pokemonInfo, isLoading } = useGetPokemonInfoByIdQuery({
    variables: Number(id),
    options: {
      enabled: !!id,
    },
  });

  const { data: pokemonEvolutionInfo } = useGetPokemonEvolutionChainQuery({
    variables: Math.ceil(Number(id) / 3),
    options: {
      enabled: !!id,
    },
  });

  const { data: pokemonSpecies } = useGetPokemonSpeciesQuery({
    variables: pokemonInfo?.species.name,
    options: {
      enabled: !!pokemonInfo?.species.name,
    },
  });

  const koreanName = pokemonSpecies?.names.filter((name) => {
    return name.language.name === "ko";
  })[0].name;

  const pokemonEvolutions = recursion(pokemonEvolutionInfo?.chain);

  const favorTexts = pokemonSpecies?.flavor_text_entries?.filter(
    (entry) => entry.language.name === "ko"
  );

  return (
    <div className="detail">
      {isLoading ? (
        <Modal isLoading={isLoading}>로딩중입니다.</Modal>
      ) : (
        <>
          <div className="book">
            <img
              src={
                pokemonInfo?.sprites?.versions?.["generation-v"]?.[
                  "black-white"
                ]?.animated?.front_default ||
                pokemonInfo?.sprites?.front_default ||
                "/pokeball.png"
              }
              width={
                pokemonInfo?.sprites?.versions?.["generation-v"]?.[
                  "black-white"
                ]?.animated?.front_default
                  ? 100
                  : 120
              }
              height={120}
              loading="lazy"
              alt={`${koreanName} 이미지`}
            />
            <div>
              <div>
                <p className="order-num">
                  No.{id?.toString().padStart(4, "0")}
                </p>
                <p className="pokemon-name">{koreanName}</p>
              </div>
              <div>
                <p>타입</p>
                <div>
                  {pokemonInfo?.types?.map((type) => (
                    <span className={`type ${type.type.name}`}>
                      {POKEMON_TYPE_MAP[type.type.name]}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p>키</p>
                <p>{parseSizeInfo(pokemonInfo?.height)}m</p>
              </div>
              <div>
                <p>몸무게</p>
                <p>{parseSizeInfo(pokemonInfo?.weight)}kg</p>
              </div>
            </div>
            <div>
              {favorTexts?.map((text, index) => (
                <p key={`${text}-${index}`}>{text.flavor_text}</p>
              ))}
            </div>
          </div>
          {/* 진화 과정 */}
          <h3>{koreanName} 진화 목록</h3>
          <ul className="card-list">
            {pokemonEvolutions?.map((pokemon, index) => (
              <Card
                key={pokemon}
                isNumber={false}
                isLinking={false}
                pokemon={{
                  id: index + Number(id),
                  name: pokemon,
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + Number(id)
                  }.png`,
                }}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Detail;
