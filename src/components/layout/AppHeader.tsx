import {
  AppBar,
  AppBarProps,
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
import {
  IconMail,
  IconMenu2,
  IconReport,
  IconStarFilled,
  IconUsers,
} from "@tabler/icons-react";
import { FC } from "react";
import { To, useNavigate } from "react-router-dom";
import { BASE_NAME } from "../../App";
import { FullscreenButton } from "../FullscreenButton";
import { drawerWidth } from "./AppLayout";
import { Messages, TMessage } from "./Messages";
import { Notifications, TNotification } from "./Notifications";
import { SearchBox } from "./SearchBox";
import { UserMenu } from "./UserMenu";

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
    marginLeft: theme.spacing(7),
    width: `calc(100% - ${theme.spacing(7)})`,
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
  const basename = BASE_NAME || "";

  const messages: TMessage[] = [
    {
      avatar: basename + "/img/user1-128x128.jpg",
      name: "Brad Diesel",
      message: "Call me whenever you can...",
      time: "2 mins",
      action: <IconStarFilled size={18} color="red" />,
    },
    {
      avatar: basename + "/img/user8-128x128.jpg",
      name: "John Pierce",
      message: "I got your message bro",
      time: "4 hours ago",
      action: <IconStarFilled size={18} color="gray" />,
    },
    {
      avatar: basename + "/img/user3-128x128.jpg",
      name: "Nora Silvester",
      message: "The subject goes here",
      time: "1 day ago",
      action: <IconStarFilled size={18} color="orange" />,
    },
  ];

  const notifications: TNotification[] = [
    {
      icon: <IconMail size={20} />,
      count: 4,
      text: "new messages",
      lastUpdated: "3 mins",
    },
    {
      icon: <IconUsers size={20} />,
      count: 8,
      text: "friend requests",
      lastUpdated: "12 hours",
    },
    {
      icon: <IconReport size={20} />,
      count: 3,
      text: "new reports",
      lastUpdated: "2 days",
    },
  ];

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
          // background: (theme) => theme.palette.background.paper,
          // color: (theme) => theme.palette.text.primary,
          ...sx,
        }}
        {...props}
      >
        <Toolbar>
          {menuButton}
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2} flexGrow={0}>
            <SearchBox />
            <Messages items={messages} />
            <Notifications items={notifications} />
          </Stack>
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
        //background: (theme) => theme.palette.background.paper,
        //color: (theme) => theme.palette.text.primary,
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
              sx={{ color: "inherit", fontWeight: 400 }}
            >
              {page.label}
            </Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} flexGrow={0}>
          <SearchBox />
          <Messages items={messages} />
          <Notifications items={notifications} />
          <FullscreenButton />
          <UserMenu />
        </Stack>
      </Toolbar>
      <Divider />
    </DesktopAppBar>
  );
};
