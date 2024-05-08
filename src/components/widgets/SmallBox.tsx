import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  value: number | string;
  icon?: ReactNode;
  actionText?: string;
  actionLink?: string;
}

export const SmallBox: FC<Props> = ({
  title,
  value,
  icon,
  actionText,
  actionLink,
}) => {
  return (
    <Card>
      <CardContent sx={{ position: "relative" }}>
        {icon && (
          <Box sx={{ position: "absolute", top: 8, right: 8 }}>{icon}</Box>
        )}
        <Typography variant="h4">{value}</Typography>
        <Typography color="text.secondary">{title}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button size="small" href={actionLink}>
          {actionText || "More info"}
        </Button>
      </CardActions>
    </Card>
  );
};
