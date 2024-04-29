import { Typography, TypographyProps } from "@mui/material";
import { FC } from "react";

export const Copyright: FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright © {new Date().getFullYear()} Thanh Nguyen
    </Typography>
  );
};
