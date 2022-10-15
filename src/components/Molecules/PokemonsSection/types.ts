import { IPokemon } from "../../../interface";

export interface IPokemonsSection {
  pokemons: IPokemon[];
  pokemonCount: number;
  loading: boolean;
  disabledFetch: boolean;
  hasErrors: boolean;
  retryFetch: () => any;
}
