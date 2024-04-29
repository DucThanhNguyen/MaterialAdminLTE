import { Stack, StackProps, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props extends Omit<StackProps, "title"> {
  title?: string | ReactNode;
  actions?: ReactNode;
}

export const PageLayout: FC<Props> = ({
  title,
  actions,
  children,
  ...props
}) => {
  return (
    <Stack {...props}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {typeof title === "string" ? (
          <Typography variant="h4" fontWeight={700}>
            {title}
          </Typography>
        ) : (
          title
        )}
        {actions}
      </Stack>
      {children}
    </Stack>
  );
};
