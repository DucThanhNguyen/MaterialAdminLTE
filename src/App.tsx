import {
  createBrowserRouter,
  LoaderFunctionArgs,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { fakeAuthProvider } from "./services/auth";
import { AppLayout, AuthLayout, PageLayout } from "./components";
import HomePage from "./pages/home";
import { loginAction, loginLoader, LoginPage } from "./pages/login";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username };
    },
    Component: AppLayout,
    children: [
      {
        index: true,
        loader: protectedLoader,
        Component: HomePage,
      },
      {
        path: "protected",
        loader: protectedLoader,
        Component: ProtectedPage,
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
      {
        path: "logout",
        async action() {
          // We signout in a "resource route" that we can hit from a fetcher.Form
          await fakeAuthProvider.signout();
          return redirect("/");
        },
      },
    ],
  },
]);

function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/auth/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  return null;
}

function ProtectedPage() {
  return <PageLayout title="Protected"></PageLayout>;
}

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
