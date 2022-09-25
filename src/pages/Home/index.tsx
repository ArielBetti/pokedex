import { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { Container, FlexBox } from "../../components";
import Card from "../../components/Card";

// recoil: atoms
import { atomPokemon } from "../../store/atoms";

// recoil: selectors
import { selectorGetPokemon } from "../../store/selectors";

// ::
const HomePage = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState("");

  // recoil: states
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);

  // recoil: loadable
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);

  return (
    <Container>
      <FlexBox align="flex-start" justify="center" direction="column" gap="xxs">
        <input
          type="text"
          onChange={(event) => setSearchPokemon(event.target.value)}
        />
        <button onClick={() => setPokemon(searchPokemon)}>Procurar</button>
        {getLoadablePokemon?.state === "loading" && <div>Loading...</div>}
        {getLoadablePokemon?.state === "hasValue" &&
          getLoadablePokemon?.contents !== undefined && (
            <Card
              type={getLoadablePokemon?.contents?.types[0]?.type?.name}
              id={getLoadablePokemon?.contents?.id}
              preview={
                getLoadablePokemon?.contents?.sprites?.versions?.[
                  "generation-v"
                ]?.["black-white"].animated?.front_default
              }
              image={
                getLoadablePokemon?.contents?.sprites?.other?.dream_world
                  ?.front_default
              }
              name={getLoadablePokemon?.contents?.name}
            />
          )}
      </FlexBox>
    </Container>
  );
};

export default HomePage;
