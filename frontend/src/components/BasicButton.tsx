import { FC } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { BasicButtonProps } from "../utils/types";

import "../styles/BasicButton.scss";

const BasicButton: FC<BasicButtonProps> = (props: BasicButtonProps) => {
  const { label, onPress, config } = props;

  let BoxClass = "basic-button__container";

  if (config?.small) BoxClass += " basic-button__container--small";

  return (
    <Box className={BoxClass}>
      <Button variant="contained" onClick={onPress} className="button">
        {label}
      </Button>
    </Box>
  );
};

export default BasicButton;
