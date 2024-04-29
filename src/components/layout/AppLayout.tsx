import { Link, Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { Copyright } from "../Copyright";

export function AppLayout() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, textAlign: "center" }}
        >
          Material Admin LTE
        </Typography>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Outlet />
        <Copyright />
      </Box>
    </Container>
  );
}
