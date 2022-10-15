import { FC } from "react";
import { useRecoilState } from "recoil";

// icons
import { MdAutorenew, MdAdd } from "react-icons/md";

// components
import {
  PokedexView,
  Loading,
  Card,
  FlexBox,
  Button,
  PokemonCount,
} from "../../";

// recoil: atoms
import { atomPokemonOffset } from "../../../store/atoms";

// types
import type { IPokemonsSection } from "./types";

// ::
const PokemonsSection: FC<IPokemonsSection> = ({
  loading,
  pokemons,
  pokemonCount,
  disabledFetch,
  hasErrors,
  retryFetch,
}) => {
  // recoil: states
  const [pokemonsOffset, setPokemonsOffset] = useRecoilState(atomPokemonOffset);

  return (
    <>
      <PokemonCount count={pokemonCount} />
      <PokedexView align="center" justify="center" direction="column" gap="xxs">
        <FlexBox
          align="center"
          justify="center"
          direction="row"
          gap="xxs"
          wrap="wrap"
        >
          {pokemons?.map((pokemon) => (
            <Card
              key={pokemon.id}
              type={pokemon.types[0]?.type?.name}
              id={pokemon.id}
              preview={
                pokemon.sprites?.versions?.["generation-v"]?.["black-white"]
                  ?.animated?.front_default
              }
              image={
                pokemon.sprites?.other?.dream_world?.front_default ||
                pokemon.sprites.other?.["official-artwork"]?.front_default ||
                ""
              }
              name={pokemon.name}
            />
          ))}
        </FlexBox>
      </PokedexView>
      <FlexBox
        align="center"
        justify="flex-start"
        direction="row"
        gap="xxs"
        wrap="wrap"
      >
        <Button
          disabled={disabledFetch}
          onClick={() => setPokemonsOffset(pokemonsOffset + 10)}
        >
          <MdAdd size="20" />
          Carregar mais
        </Button>
        {hasErrors && (
          <Button onClick={() => retryFetch()}>
            <MdAutorenew size="20" />
            Tentar novamente
          </Button>
        )}
        <Loading loadingText="Carregando pokemons..." isLoading={loading} />
      </FlexBox>
    </>
  );
};

export default PokemonsSection;
