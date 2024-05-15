import {
  createBrowserRouter,
  LoaderFunctionArgs,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { AppLayout, AuthLayout } from "./components";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import { loginAction, loginLoader, LoginPage } from "./pages/login";
import { authProvider } from "./services/auth";
import WidgetsPage from "./pages/widgets";

// The basename of the app for situations where you can't deploy to the root of the domain, but a sub directory.
export const BASE_NAME =
  window.location.hostname === "ducthanhnguyen.github.io"
    ? "/MaterialAdminLTE"
    : undefined;

const router = createBrowserRouter(
  [
    {
      id: "root",
      path: "/",
      loader() {
        // Our root route always provides the user, if logged in
        return {
          user: authProvider.user,
          isAuthenticated: authProvider.isAuthenticated,
        };
      },
      Component: AppLayout,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: protectedLoader,
          Component: HomePage,
        },
        {
          path: "widgets",
          loader: protectedLoader,
          Component: WidgetsPage,
        },
      ],
    },
    {
      id: "auth",
      path: "/auth/",
      Component: AuthLayout,
      children: [
        {
          path: "login",
          action: loginAction,
          loader: loginLoader,
          Component: LoginPage,
        },
      ],
    },
    {
      path: "logout",
      async action() {
        // We signout in a "resource route" that we can hit from a fetcher.Form
        await authProvider.signout();
        return redirect("/");
      },
    },
  ],
  {
    basename: BASE_NAME,
  },
);

function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/auth/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!authProvider.isAuthenticated) {
    let from = new URL(request.url).pathname;
    if (BASE_NAME && from.startsWith(BASE_NAME)) {
      from = BASE_NAME.substring(BASE_NAME.length);
    }
    if (from && from !== "/") {
      const params = new URLSearchParams();
      params.set("from", from);
      return redirect("/auth/login?" + params.toString());
    }

    return redirect("/auth/login");
  }
  return null;
}

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
