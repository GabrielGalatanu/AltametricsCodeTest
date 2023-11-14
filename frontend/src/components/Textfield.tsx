import { FC } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { TextFieldProps } from "../utils/types";

import "../styles/Textfield.scss";

const Textfield: FC<TextFieldProps> = (props: TextFieldProps) => {
  const { label, value, onChange } = props;

  return (
    <Box className="textfield__container">
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        variant="standard"
        fullWidth
      />
    </Box>
  );
};

export default Textfield;
