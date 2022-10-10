import { selector } from "recoil";

// api
import { requester } from "../../api/requester";

// recoil: atoms
import { atomPokemon, atomPokemonFetch, atomPokemonOffSet } from "../atoms";

export const selectorfetchPokemons = selector({
  key: "selectorfetchPokemons",
  get: async ({ get }) => {
    const offSet = get(atomPokemonOffSet);

    const { data } = await requester({
      baseURL: "https://pokeapi.co/api/v2",
    }).get(`/pokemon?limit=15&offset=${offSet}`);

    return data?.results;
  },
});

export const selectorGetPokemons = selector({
  key: "selectorGetPokemons",
  get: async ({ get }) => {
    const pokemons = get(atomPokemonFetch);

    if (pokemons && pokemons.length > 0) {
      const list = pokemons.map((pokemon) => pokemon.name);

      const pokeFeth = list.map(async (item) => {
        const { data } = await requester({
          baseURL: "https://pokeapi.co/api/v2",
        }).get(`/pokemon/${item.toLowerCase().trim()}`);

        return data;
      });

      const pokemonList = Promise.all(pokeFeth);

      return pokemonList;
    }
  },
});

export const selectorGetPokemon = selector({
  key: "selectorGetPokemon",
  get: async ({ get }) => {
    const pokemon = get(atomPokemon);

    if (pokemon) {
      const { data } = await requester({
        baseURL: "https://pokeapi.co/api/v2",
      }).get(`/pokemon/${pokemon.toLowerCase().trim()}`);

      return data;
    }
  },
});
