import POKEMON_TYPE_MAP from "../../constants/pokemon-type-map";

interface TypeProps {
  typeName: string;
}

export default function Type({ typeName }: TypeProps) {
  return (
    <span className={`type ${typeName}`}>{POKEMON_TYPE_MAP[typeName]}</span>
  );
}
