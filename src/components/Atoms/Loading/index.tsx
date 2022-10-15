import { FC } from "react";

// icons
import pokeBall from "../../../assets/pokeball-rotate.png";

// components
import * as Atom from "./atoms";

// types
import type { ILoading } from "./types";

// ::
const Loading: FC<ILoading> = ({ isLoading, loadingText }) => {
  if (!isLoading) return null;

  return (
    <Atom.LoadingContainer
      align="center"
      justify="flex-start"
      direction="row"
      gap="xxs"
    >
      <Atom.PokemonIcon>
        <img src={pokeBall} alt="Illustração de carregamento: pokebola girando" />
      </Atom.PokemonIcon>
      {loadingText}
    </Atom.LoadingContainer>
  );
};

export default Loading;
