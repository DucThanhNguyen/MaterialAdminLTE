import { Breadcrumbs, Link, LinkProps, Typography } from "@mui/material";
import { IconHome } from "@tabler/icons-react";
import { FC, ReactNode } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

interface Props {
  title?: string | ReactNode;
}

export const PageBreadcrumbs: FC<Props> = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    "/layout": "Layout Options",
    "/charts": "Charts",
    "/ui": "UI Elements",
    "/tables": "Tables",
  };

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <LinkRouter
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        to="/"
      >
        <IconHome size={18} strokeWidth={1.5} />
      </LinkRouter>
      {pathnames.length === 0 && (
        <Typography color="text.secondary">{title}</Typography>
      )}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.secondary" key={to}>
            {title}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            <Typography color={(theme) => theme.palette.primary.main}>
              {breadcrumbNameMap[to] || value}
            </Typography>
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};
