import { FC } from "react";
import { PageLayout } from "../../components";
import { useFetcher, useRouteLoaderData } from "react-router-dom";

function AuthStatus() {
  // Get our logged in user, if they exist, from the root route loader data
  let { user } = useRouteLoaderData("root") as { user: string | null };
  let fetcher = useFetcher();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  let isLoggingOut = fetcher.formData != null;

  return (
    <div>
      <p>Welcome {user}!</p>
      <fetcher.Form method="post" action="/auth/logout">
        <button type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? "Signing out..." : "Sign out"}
        </button>
      </fetcher.Form>
    </div>
  );
}

const HomePage: FC = () => {
  return (
    <PageLayout title="Dashboard">
      <AuthStatus />
    </PageLayout>
  );
};

export default HomePage;
