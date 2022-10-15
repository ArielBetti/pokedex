import styled from "styled-components";

// types
import type { IFlexBoxProps } from "./types";

export const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props?.justify};
  align-items: ${(props) => props?.align};
  flex-direction: ${(props) => props?.direction};
  max-width: ${(props) =>
    props?.width ? props?.theme?.breakpoints?.[props?.width] : "100%"};
  width: 100%;
  gap: ${(props) => (props?.gap ? props?.theme?.spacing?.[props?.gap] : 0)};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;
