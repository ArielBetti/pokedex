import { useState } from "react";
import { useSetRecoilState } from "recoil";

// icons
import { MdSearch } from "react-icons/md";

// recoil: atoms
import { atomPokemonSearch } from "../../../store/atoms";

// components
import * as Atom from './atoms';
import { Button, Input } from "../..";

// ::
const PokemonSearch = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState<string>("");

  // recoil: states
  const setPokemon = useSetRecoilState(atomPokemonSearch);

  return (
    <Atom.SearchContainer align="center" justify="flex-start" direction="row" gap="xxs">
      <Input
        placeholder="Procurar por nome ou ID"
        type="text"
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <Button onClick={() => setPokemon(searchPokemon)}>
        <MdSearch size="20" />
        Procurar
      </Button>
    </Atom.SearchContainer>
  );
};

export default PokemonSearch;
