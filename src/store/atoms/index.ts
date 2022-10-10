import { atom } from "recoil";

export const atomPokemonFetch = atom<any[]>({
  key: "atomPokemonFetch",
  default: undefined,
});

export const atomPokemonOffSet = atom<number>({
  key: "atomPokemonOffSet",
  default: 0,
});

export const atomPokemon = atom<string | undefined>({
  key: "atomPokemon",
  default: undefined,
});

export const atomPokemons = atom<any[]>({
  key: "atomPokemons",
  default: [],
});
