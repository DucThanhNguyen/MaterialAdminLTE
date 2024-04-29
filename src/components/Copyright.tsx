import { Link, Typography, TypographyProps } from "@mui/material";
import { FC } from "react";

export const Copyright: FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright © {new Date().getFullYear()}{" "}
      <Link href="https://github.com/DucThanhNguyen/" underline="hover">
        Thanh Nguyen
      </Link>
    </Typography>
  );
};
