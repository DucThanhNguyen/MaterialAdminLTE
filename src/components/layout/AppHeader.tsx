import {
  AppBar,
  AppBarProps,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconBell, IconMail, IconMenu2 } from "@tabler/icons-react";
import { FC } from "react";
import { drawerWidth } from "./AppLayout";
import { To, useNavigate } from "react-router-dom";
import { FullscreenButton } from "../FullscreenButton";

type TTopNav = {
  label: string;
  link?: To;
};

const pages: TTopNav[] = [
  { label: "Home", link: "/" },
  { label: "Contact", link: "/contact" },
];

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
  const navigate = useNavigate();

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
        <Stack direction="row" spacing={1} flexGrow={1}>
          {pages.map((page, index) => (
            <Button
              key={index}
              onClick={() => page.link && navigate(page.link)}
              sx={{ color: "text.secondary", fontWeight: 400 }}
            >
              {page.label}
            </Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} flexGrow={0}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <IconMail strokeWidth={1.5} />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="error">
              <IconBell strokeWidth={1.5} />
            </Badge>
          </IconButton>
          <FullscreenButton />
        </Stack>
      </Toolbar>
      <Divider />
    </DesktopAppBar>
  );
};
