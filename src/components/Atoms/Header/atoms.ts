import styled from "styled-components";
import { FlexBox } from "../Flexbox";

export const HeaderContainer = styled(FlexBox)`
  margin: 0px;
  margin-bottom: ${(props) => props.theme.spacing.sm};

  h2 {
    margin: 0px;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral[1]};
  cursor: pointer;
  border-radius: 6px;
  padding: ${(props) => props.theme.spacing.xs};
  transition: background-color ${(props) => props.theme.transitions.time} ease;

  :hover {
    background-color: ${(props) => props.theme.colors.neutral.pure};
  }
`;
