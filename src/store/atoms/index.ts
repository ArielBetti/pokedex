import { atom } from "recoil";

export const atomPokemon = atom<string | undefined>({
  key: "atomPokemon",
  default: undefined,
});
