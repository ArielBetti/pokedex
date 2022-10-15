import { FC } from "react";
import { FlexBox } from "../Flexbox";

// components
import * as Atom from "./atoms";

// types
import type { IInput } from "./types";

// ::
const Input: FC<IInput> = ({ label, ...rest }) => {
  return (
    <FlexBox align="flex-start" justify="center" direction="column" gap="xxs">
      {label}
      <Atom.Input {...rest} />
    </FlexBox>
  );
};

export default Input;
