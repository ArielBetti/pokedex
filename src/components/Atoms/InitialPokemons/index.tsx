import { FlexBox } from "../Flexbox";

// components
import * as Atom from "./atoms";

// ::
const InitialPokemons = () => {
  return (
    <FlexBox
      align="center"
      justify="flex-start"
      direction="row"
      gap="xxs"
      wrap="wrap"
    >
      <Atom.PokemonGif
        flip
        alt="Pokemon bulbasaur gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
      />
      <Atom.PokemonGif
        flip
        alt="Pokemon charmander gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
      />
      <Atom.PokemonGif
        flip
        alt="Pokemon squirtle gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
      />
      <Atom.PokemonGif
        alt="Pokemon pikachu gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
      />
    </FlexBox>
  );
};

export default InitialPokemons;
