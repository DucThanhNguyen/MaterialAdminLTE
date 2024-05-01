import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import {
  Form,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { authProvider } from "../../services/auth";

export function LoginPage() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData?.get("username") != null;

  let actionData = useActionData() as { error: string } | undefined;

  return (
    <Form method="post" replace>
      <input type="hidden" name="redirectTo" value={from} />
      <Typography>Sign in to start your session</Typography>
      <Typography variant="caption" color="text.secondary">
        Demo account: admin/test
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Link href="#" variant="body2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isLoggingIn}
      >
        {isLoggingIn ? "Logging in..." : "Sign In"}
      </Button>
      <Link href="#" variant="body2" underline="hover">
        {"Don't have an account? Sign Up"}
      </Link>

      {actionData && actionData.error ? (
        <Typography variant="body2" color="error" mt={2}>
          {actionData.error}
        </Typography>
      ) : null}
    </Form>
  );
}

export async function loginAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if (!username) {
    return {
      error: "You must provide a username or email to log in",
    };
  }

  if (!password) {
    return {
      error: "You must provide a password to log in",
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    const ok = await authProvider.signin(username, password);
    if (!ok) {
      return {
        error: "Invalid login attempt",
      };
    }
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: "Invalid login attempt",
    };
  }

  let redirectTo = formData.get("redirectTo") as string | null;
  return redirect(redirectTo || "/");
}

export async function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect("/");
  }
  return null;
}
