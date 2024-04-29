import { Box, Container, Typography } from "@mui/material";
import { Copyright } from "./components";

function App() {
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
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
