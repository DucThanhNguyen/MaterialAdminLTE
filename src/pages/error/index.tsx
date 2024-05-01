import {
  Alert,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconChevronLeft, IconHome } from "@tabler/icons-react";
import { FC } from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

function getErrorMessage(status: number) {
  switch (status) {
    case 400:
      return "The request cannot be fulfilled due to bad syntax";
    case 401:
      return "Unauthorized. Please login to continue";
    case 403:
      return "You don’t have permission to access this resource.";
    case 404:
      return "Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.";
    case 500:
      return "Something bad just happened. Our servers could not handle your request. Try refreshing the page.";
    case 503:
      return "All of our servers are busy. We cannot handle your request right now, please wait for a couple of minutes and refresh the page.";
    default:
      return "Sorry, an unexpected error has occurred.";
  }
}

const ErrorPage: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const error: any = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm">
      <Stack spacing={4} mt={8} mb={3} alignItems="center">
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
        <Typography
          variant="h1"
          fontWeight={900}
          fontSize={isMobile ? 120 : 200}
          sx={{ color: "#dee2e6" }}
        >
          {isRouteError ? error.status : "Oops!"}
        </Typography>
        <Typography>
          {isRouteError
            ? getErrorMessage(error.status)
            : error.message || "Sorry, an unexpected error has occurred."}
        </Typography>
        {error.data?.message && (
          <Alert severity="error">{error.data.message}</Alert>
        )}
        {isRouteError && error.status === 401 ? (
          <Button variant="contained" onClick={() => navigate("/auth/login")}>
            Sign In
          </Button>
        ) : isRouteError && (error.status === 500 || error.status === 503) ? (
          <Button variant="contained" onClick={() => window.location.reload()}>
            Refresh the page
          </Button>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => navigate(-1)}
              startIcon={<IconChevronLeft strokeWidth={1.5} />}
            >
              Go back
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/")}
              startIcon={<IconHome strokeWidth={1.5} />}
            >
              Get back to home page
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default ErrorPage;
