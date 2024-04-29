import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Copyright } from "../Copyright";

export function AuthLayout() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
      }}
    >
      <Container maxWidth="xs" sx={{ height: "100vh" }}>
        <Stack
          spacing={2}
          sx={{
            height: "100vh",
            p: 2,
            overflow: "auto",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Material Admin <span style={{ fontWeight: 200 }}>LTE</span>
          </Typography>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Outlet />
          </Paper>
          <Copyright />
        </Stack>
      </Container>
    </Box>
  );
}
