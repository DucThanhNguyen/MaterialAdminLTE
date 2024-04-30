import {
  AppBar,
  AppBarProps,
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconMenu2 } from "@tabler/icons-react";
import { FC } from "react";
import { drawerWidth } from "./AppLayout";

interface DesktopAppBarProps extends AppBarProps {
  open?: boolean;
}

const DesktopAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<DesktopAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: theme.spacing(8),
    width: `calc(100% - ${theme.spacing(8)})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface Props extends AppBarProps {
  open?: boolean;
  onMenuClick: () => void;
}

export const AppHeader: FC<Props> = ({
  open,
  onMenuClick,
  position,
  sx,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuButton = (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={onMenuClick}
      sx={{ mr: 2 }}
    >
      <IconMenu2 />
    </IconButton>
  );

  if (isMobile) {
    return (
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.text.primary,
          ...sx,
        }}
        {...props}
      >
        <Toolbar>
          {menuButton}
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2} flexGrow={0}></Stack>
        </Toolbar>
        <Divider />
      </AppBar>
    );
  }

  return (
    <DesktopAppBar
      open={open}
      position="fixed"
      elevation={0}
      sx={{
        background: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        ...sx,
      }}
      {...props}
    >
      <Toolbar>
        {menuButton}
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={2} flexGrow={0}></Stack>
      </Toolbar>
      <Divider />
    </DesktopAppBar>
  );
};
