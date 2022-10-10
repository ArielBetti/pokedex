import { useEffect, useState, useMemo } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { Button, Container, Flexbox, Input, Stacker } from "webetti-react-sdk";

import Card from "../../components/Card";

// recoil: atoms
import {
  atomPokemon,
  atomPokemonFetch,
  atomPokemonOffSet,
  atomPokemons,
} from "../../store/atoms";

// recoil: selectors
import {
  selectorfetchPokemons,
  selectorGetPokemon,
  selectorGetPokemons,
} from "../../store/selectors";

// ::
const HomePage = () => {
  // local: states
  const [searchPokemon, setSearchPokemon] = useState("");

  // recoil: states
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);
  const [pokemons, setPokemons] = useRecoilState(atomPokemons);
  const [offSetPokemons, setOffsetPokemons] = useRecoilState(atomPokemonOffSet);
  const [fetchPokemons, setFetchPokemons] = useRecoilState(atomPokemonFetch);

  // recoil: loadable
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
  const fetchLoadablePokemons = useRecoilValueLoadable(selectorfetchPokemons);
  const getLoadablePokemons = useRecoilValueLoadable(selectorGetPokemons);

  const disabledFetchMorePokemons = useMemo(() => {
    if (
      getLoadablePokemons.state === "loading" ||
      fetchLoadablePokemons.state === "loading"
    ) {
      return true;
    }
    if (
      getLoadablePokemons.state === "hasError" ||
      fetchLoadablePokemons.state === "hasError"
    ) {
      return true;
    }

    return false;
  }, [fetchLoadablePokemons, getLoadablePokemons]);

  const fetchMorePokemons = () => {
    setOffsetPokemons(offSetPokemons + 15);
  };

  useEffect(() => {
    if (
      fetchLoadablePokemons.state === "hasValue" &&
      fetchLoadablePokemons.contents !== undefined
    ) {
      setFetchPokemons(fetchLoadablePokemons.contents);
    }
  }, [fetchLoadablePokemons.state, fetchLoadablePokemons.contents]);

  useEffect(() => {
    if (
      getLoadablePokemons.state === "hasValue" &&
      getLoadablePokemons.contents !== undefined
    ) {
      console.log(getLoadablePokemons.contents, pokemons);
      if (pokemons) {
        const list = pokemons;
        const mergePokemons = list.concat(getLoadablePokemons.contents);

        setPokemons(mergePokemons);
      }
    }

    if (getLoadablePokemons.state === "hasError") {
      console.log("@@", "Ocorreu um erro");
    }
  }, [getLoadablePokemons.state, getLoadablePokemons.contents]);

  return (
    <Container>
      <Stacker bottom="md">
        <Flexbox align="flex-start" justify="center" direction="column">
          <Flexbox
            align="flex-start"
            justify="center"
            direction="column"
            gap="xs"
          >
            <Input
              label="Procure por um pokemon"
              placeholder="..."
              type="text"
              onChange={(event) => setSearchPokemon(event.target.value)}
            />
            <Button onClick={() => setPokemon(searchPokemon)}>Procurar</Button>
          </Flexbox>
          {(searchPokemon || pokemon) && (
            <Stacker all="sm">
              {getLoadablePokemon?.state === "loading" && <div>Loading...</div>}
              {getLoadablePokemon?.state === "hasValue" &&
                getLoadablePokemon?.contents !== undefined && (
                  <Flexbox
                    direction="row"
                    align="center"
                    justify="flex-start"
                    gap="xxs"
                    wrap="wrap"
                  >
                    <Card
                      type={getLoadablePokemon?.contents?.types[0]?.type?.name}
                      id={getLoadablePokemon?.contents?.id}
                      preview={
                        getLoadablePokemon?.contents?.sprites?.versions?.[
                          "generation-v"
                        ]?.["black-white"]?.animated?.front_default || ""
                      }
                      image={
                        getLoadablePokemon?.contents?.sprites?.other
                          ?.dream_world?.front_default || ""
                      }
                      name={getLoadablePokemon?.contents?.name}
                    />
                  </Flexbox>
                )}
            </Stacker>
          )}
          {pokemons && (
            <Stacker all="xs">
              <Flexbox
                direction="row"
                align="center"
                justify="flex-start"
                gap="xxs"
                wrap="wrap"
              >
                {pokemons.map((pokemon) => (
                  <Card
                    type={pokemon?.types[0]?.type?.name}
                    id={pokemon?.id}
                    preview={
                      pokemon?.sprites?.versions?.["generation-v"]?.[
                        "black-white"
                      ].animated?.front_default
                    }
                    image={pokemon?.sprites?.other?.dream_world?.front_default}
                    name={pokemon?.name}
                  />
                ))}
              </Flexbox>
            </Stacker>
          )}
          {(fetchLoadablePokemons.state === "loading" ||
            getLoadablePokemons.state === "loading") && (
            <div>Carregando pokemons...</div>
          )}
          <Button
            disabled={disabledFetchMorePokemons}
            onClick={() => fetchMorePokemons()}
          >
            Carregar mais
          </Button>
        </Flexbox>
      </Stacker>
    </Container>
  );
};

export default HomePage;
