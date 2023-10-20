export type PokemonListResultType = {
  name: string;
  url: string;
};

export type PokemonListResponseType = {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResultType[];
};

export type LanguageType = {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: NameType[];
};

export type NameType = {
  name: string;
  language: LanguageType;
};

export type DescriptionType = {
  description: string;
  language: LanguageType;
};

export type GrowthRateExperienceLevelType = {
  level: number;
  experience: number;
};

export type GrowthRateType = {
  id: number;
  name: string;
  formula: string;
  descriptions: DescriptionType[];
  levels: GrowthRateExperienceLevelType[];
  pokemon_species: PokemonSpeciesType[];
};

export type PokemonSpeciesDexEntry = {
  entry_number: number;
  pokedex: Pokedex;
};

export type PokemonEntry = {
  entry_number: number;
  pokemon_species: PokemonSpeciesType[];
};

export type Pokedex = {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: DescriptionType[];
  names: NameType[];
  pokemon_entries: PokemonEntry[];
};

export type EggGroup = {
  id: number;
  name: string;
  names: NameType[];
  pokemon_species_details: PokemonSpeciesGender;
};

export type PokemonSpeciesGender = {
  rate: number;
  pokemon_species: PokemonSpeciesType[];
};

export type PokemonColor = {
  id: number;
  name: string;
  names: NameType[];
  pokemon_species: PokemonSpeciesType[];
};

export type AwesomeName = {
  awesome_name: string;
  language: LanguageType;
};

export type PokemonShape = {
  id: number;
  name: string;
  awesome_names: AwesomeName[];
  names: NameType[];
  pokemon_species: PokemonSpeciesType[];
};

export type Ability = {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: Generation;
  names: NameType[];
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: FlavorText[];
  pokemon: AbilityPokemon[];
};

export type FlavorText = {
  flavor_text: string;
  language: LanguageType;
  version_group: VersionGroup;
};

export type AbilityPokemon = {
  is_hidden: boolean;
  slot: number;
  pokemon: PokemonSpeciesType;
};

export type AbilityEffectChange = {
  effect_entries: Effect[];
  version_group: VersionGroup;
};

export type VersionGroup = {
  id: number;
  name: string;
  order: number;
  generation: Generation;
  move_learn_methods: MoveLearnMethod[];
  pokedexes: Pokedex[];
  regions: Region[];
  versions: Version[];
};

export type Version = unknown;

export type Region = {
  id: number;
  name: string;
  names: NameType[];
  main_generation: Generation;
  pokedexes: Pokedex[];
  version_groups: VersionGroup[];
};

export type MoveLearnMethod = {
  id: number;
  name: string;
  descriptions: DescriptionType[];
  names: NameType[];
  version_groups: VersionGroup[];
};

export type Effect = {
  effect: string;
  language: LanguageType;
};

export type VerboseEffect = {
  effect: string;
  short_effect: string;
  language: LanguageType;
};

export type Generation = {
  id: number;
  name: string;
  abilities: Ability[];
  names: NameType[];
  main_region: Region;
  moves: Move[];
  pokemon_species: PokemonSpeciesType[];
  types: Type[];
  version_groups: VersionGroup[];
};

export type Move = unknown;

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonSpeciesType = {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: GrowthRateType;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: EggGroup[];
  color: PokemonColor;
  shape: PokemonShape;
  evolves_from_species: PokemonSpeciesType;
  evolution_chain: unknown;
  habitat: unknown;
  generation: Generation;
  names: NameType[];
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: unknown[];
  game_indices: unknown[];
  held_items: unknown[];
  location_area_encounters: string;
  moves: unknown[];
  past_types: unknown[];
  sprites: PokemonSprites;
  species: PokemonSpeciesType;
  stats: unknown[];
  types: Type[];
};

export type PokemonSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  versions: PokemonVersions;
};

export interface PokemonImgType {
  [key: string]: string;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonVersions {
  "generation-i": { "red-blue": PokemonImgType; yellow: PokemonImgType };
  "generation-ii": {
    crystal: PokemonImgType;
    gold: PokemonImgType;
    silver: PokemonImgType;
  };
  "generation-iii": {
    emerald: PokemonImgType;
    "firered-leafgreen": PokemonImgType;
    "ruby-sapphire": PokemonImgType;
  };
  "generation-iv": {
    "diamond-pearl": PokemonImgType;
    "heartgold-soulsilver": PokemonImgType;
    platinum: PokemonImgType;
  };
  "generation-v": {
    "black-white": { animated: PokemonImgType; front_default: string };
  };
  "generation-vi": {
    "omegaruby-alphasapphire": PokemonImgType;
    "x-y": PokemonImgType;
  };
  "generation-vii": { "ultra-sun-ultra-moon": PokemonImgType };
}

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
};
