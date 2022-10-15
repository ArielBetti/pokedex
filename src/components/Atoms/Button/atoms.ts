import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.spacing.xxxs};
  color: ${(props) => props.theme.font.colors.pure};
  padding: 10px;
  font-size: 1em;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

`;
