import { selector } from "recoil";

// api
import { requester } from "../../api/requester";
import { IPokemon, IPokemonFetch } from "../../interface";

// recoil: atoms
import {
  atomPokemonFetch,
  atomPokemonOffset,
  atomPokemonSearch,
} from "../atoms";
import {
  atomHashPokemon,
  atomHashPokemonsFetch,
  atomHashPokemonsList,
} from "../hashs";

export const selectorFetchPokemons = selector({
  key: "selectorFetchPokemons",
  get: async ({ get }) => {
    get(atomHashPokemonsFetch);
    const offSet = get(atomPokemonOffset);

    const { data } = await requester({
      baseURL: "https://pokeapi.co/api/v2",
    }).get(`pokemon?limit=10&offset=${offSet}`);

    return data;
  },
});

export const selectorGetPokemons = selector({
  key: "selectorGetPokemons",
  get: async ({ get }) => {
    get(atomHashPokemonsList);
    const pokemonFetch = get(atomPokemonFetch);

    if (pokemonFetch.length > 0) {
      const list = pokemonFetch.map((pokemon: IPokemonFetch) => pokemon.name);

      const result = list.map(async (pokemon) => {
        const { data } = await requester({
          baseURL: "https://pokeapi.co/api/v2",
        }).get(`/pokemon/${pokemon.toLowerCase().trim()}`);

        return data;
      });

      const pokemonsList = Promise.all(result);

      return pokemonsList;
    }
  },
});

export const selectorGetPokemon = selector<IPokemon>({
  key: "selectorGetPokemon",
  get: async ({ get }) => {
    get(atomHashPokemon);
    const pokemon = get(atomPokemonSearch);

    if (pokemon) {
      const { data } = await requester({
        baseURL: "https://pokeapi.co/api/v2",
      }).get(`/pokemon/${pokemon.toLowerCase().trim()}`);

      return data;
    }
  },
});
