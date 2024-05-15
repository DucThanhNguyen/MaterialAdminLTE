import {
  Box,
  Container,
  CSSObject,
  Divider,
  Drawer,
  styled,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconDashboard, IconPackage } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { NavMenu, TMenuItem } from "./NavMenu";

export const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  boxShadow: "10px 4px 32px #4b4b7129",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.spacing(8),
});

const DesktopDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useRouteLoaderData("root") as {
    isAuthenticated: boolean;
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && location.pathname) {
      const params = new URLSearchParams();
      params.set("from", location.pathname);
      navigate("/login?" + params.toString());
    }
  }, [isAuthenticated, location.pathname]);

  const items: TMenuItem[] = [
    {
      link: "/",
      label: "Dashboard",
      icon: <IconDashboard strokeWidth={1.5} />,
    },
    {
      link: "/widgets",
      label: "Widgets",
      icon: <IconPackage strokeWidth={1.5} />,
    },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (isMobile) {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    } else setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppHeader open={open} onMenuClick={handleDrawerToggle} />
      <Box component="nav" sx={{ flexShrink: { sm: 0 } }}>
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                Material Admin <span style={{ fontWeight: 200 }}>LTE</span>
              </Typography>
            </Toolbar>
            <Divider />
            <NavMenu items={items} isMobile />
          </Drawer>
        ) : (
          <DesktopDrawer variant="permanent" open={open}>
            <Toolbar sx={{ p: "0!important" }}>
              <Typography
                variant="h6"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: "text.secondary",
                }}
              >
                {open ? (
                  <>
                    Material Admin <span style={{ fontWeight: 200 }}>LTE</span>
                  </>
                ) : (
                  "MA"
                )}
              </Typography>
            </Toolbar>
            <Divider />
            <NavMenu items={items} isMimi={!open} />
          </DesktopDrawer>
        )}
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          width: isMobile
            ? "100%"
            : `calc(100% - ${open ? drawerWidth + "px" : theme.spacing(8)})`,
          height: "100%",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar />
        <Container sx={{ p: "12px 26px 26px" }} maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
