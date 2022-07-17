import { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

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

  console.log(getLoadablePokemon?.contents);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <button onClick={() => setPokemon(searchPokemon)}>Procurar</button>
      {getLoadablePokemon?.state === "loading" && <div>Loading...</div>}
      {getLoadablePokemon?.state === "hasValue" &&
        getLoadablePokemon?.contents !== undefined && (
          <div>
            <img
              width="150px"
              src={getLoadablePokemon?.contents?.sprites?.front_default}
              alt={`pokemon-${getLoadablePokemon?.contents?.name}`}
            />
            <h3>{getLoadablePokemon?.contents?.name}</h3>
          </div>
        )}
    </div>
  );
};

export default HomePage;
