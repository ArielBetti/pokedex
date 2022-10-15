import styled, { keyframes } from "styled-components";
import { FlexBox } from "../Flexbox";

export const LoadingContainer = styled(FlexBox)`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  padding: 10px;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  max-width: 300px;
`;

export const PokemonIcon = styled.div`
  animation: pokeballRotate infinite 5s;

  @keyframes pokeballRotate {
    30% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(13deg);
    }
    50% {
      transform: rotate(-13deg);
    }
    60% {
      transform: rotate(13deg);
    }
    80% {
      transform: rotate(-13deg);
    }
    90% {
      transform: rotate(13deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
