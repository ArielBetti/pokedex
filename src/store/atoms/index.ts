import { atom } from "recoil";
import { IPokemon, IPokemonFetch } from "../../interface";

export const atomPokemonSearch = atom<string | undefined>({
  key: "atomPokemonSearch",
  default: undefined,
});

export const atomPokemonFetch = atom<IPokemonFetch[]>({
  key: "atomPokemonFetch",
  default: [],
});

export const atomPokemonOffset = atom<number>({
  key: "atomPokemonOffset",
  default: 0,
});

export const atomPokemonList = atom<IPokemon[]>({
  key: "atomPokemonList",
  default: [],
});

export const atomPokemon = atom<IPokemon>({
  key: "atomPokemon",
  default: undefined,
});
