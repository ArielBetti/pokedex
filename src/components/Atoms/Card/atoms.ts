import styled from "styled-components";
import { TPokemonType } from "../../../interface";
import { FlexBox } from "../Flexbox";

interface TAtomPokemonType {
  type: TPokemonType;
}

export const Container = styled(FlexBox)`
  animation: fadeIn 0.5s both;
  max-width: 225px;
  background-color: ${(props) => props?.theme?.colors?.neutral?.pure};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 10px;
  height: 320px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 100%;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const PokemonSpot = styled(FlexBox)<TAtomPokemonType>`
  background-color: ${(props) => props?.theme?.colors?.types?.[props?.type]};
  border-radius: 100%;
  width: 160px;
  height: 160px;
`;

export const PokemonSprite = styled.img`
  height: 200px;
  width: 200px;
`;

export const PokemonPreviewSection = styled(FlexBox)`
  height: 100px;
`;

export const PokemonText = styled.span<TAtomPokemonType>`
  color: ${(props) => props?.theme?.colors?.types?.[props?.type]};
  font-size: 1.25em;
  font-weight: bold;
  text-transform: capitalize;
`;
