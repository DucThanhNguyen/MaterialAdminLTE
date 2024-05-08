import {
  Box,
  Stack,
  BoxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { PageBreadcrumbs } from "./PageBreadcrumbs";

interface Props extends Omit<BoxProps, "title"> {
  title?: string | ReactNode;
  breadcrumbTitle?: string | ReactNode;
  actions?: ReactNode;
}

export const PageLayout: FC<Props> = ({
  title,
  breadcrumbTitle,
  actions,
  children,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box {...props}>
      <Stack
        direction={isMobile && !actions ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
      >
        {typeof title === "string" ? (
          <Typography component="h1" fontSize="1.8rem">
            {title}
          </Typography>
        ) : (
          title
        )}
        {actions ? (
          actions
        ) : (
          <PageBreadcrumbs title={breadcrumbTitle || title} />
        )}
      </Stack>
      {children}
    </Box>
  );
};
