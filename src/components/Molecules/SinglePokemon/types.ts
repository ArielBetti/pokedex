import { IPokemon } from "../../../interface";

export interface ISinglePokemon {
  pokemon: IPokemon;
  loading: boolean;
  error: boolean;
}
