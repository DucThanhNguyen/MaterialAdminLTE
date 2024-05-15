import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardProps,
  Typography,
} from "@mui/material";
import { IconLink } from "@tabler/icons-react";
import { FC, ReactNode } from "react";

interface Props extends CardProps {
  title: string;
  value: number | string;
  icon?: ReactNode;
  actionText?: string;
  actionLink?: string;
  color?: string;
}

export const SmallBox: FC<Props> = ({
  title,
  value,
  icon,
  actionText,
  actionLink,
  color,
  ...props
}) => {
  return (
    <Card
      sx={color ? { backgroundColor: color, color: "white" } : undefined}
      {...props}
    >
      <CardContent sx={{ position: "relative" }}>
        {icon && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "rgba(0, 0, 0, 0.15)",
            }}
          >
            {icon}
          </Box>
        )}
        <Typography variant="h4">{value}</Typography>
        <Typography color={color ? "white" : "text.secondary"}>
          {title}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          p: 0,
          justifyContent: "end",
          backgroundColor: "rgba(0, 0, 0, 0.07)",
        }}
      >
        <Button
          size="small"
          href={actionLink}
          endIcon={<IconLink size={18} />}
          sx={color ? { color: "white" } : undefined}
          fullWidth
        >
          {actionText || "More info"}
        </Button>
      </CardActions>
    </Card>
  );
};
