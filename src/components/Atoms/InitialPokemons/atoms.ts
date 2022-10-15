import styled from 'styled-components';

export const PokemonGif = styled.img<{ flip?: boolean }>`
  transform: ${(props) => props.flip ? `scaleX(-1)` : 'scaleX(1)'};
`
