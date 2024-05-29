import {
  Box,
  BoxProps,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import { FC, ReactNode } from "react";
import { useMatch, useNavigate, useRouteLoaderData } from "react-router-dom";
import { TUser } from "../../services/auth";
import { LetterAvatar } from "../LetterAvatar";

export type TMenuItem = {
  label?: string | ReactNode;
  icon?: ReactNode | null;
  link?: string;
  onClick?: () => void;
  divider?: boolean;
  group?: boolean;
  selected?: boolean;
};

interface Props extends BoxProps {
  items?: TMenuItem[];
  isMimi?: boolean;
  isMobile?: boolean;
}

export const NavMenu: FC<Props> = ({
  items,
  isMimi,
  isMobile,
  sx,
  ...props
}) => {
  const { user } = useRouteLoaderData("root") as { user: TUser };

  return (
    <Box
      sx={{
        overflow: "auto",
        height: "100%",
        ...sx,
      }}
      {...props}
    >
      <List>
        {isMobile && (
          <>
            <ListItem sx={{ pl: isMimi ? 1.5 : undefined, pb: 2 }}>
              <ListItemAvatar>
                <LetterAvatar
                  src={user?.avatar}
                  name={user?.name || user?.email}
                  size={40}
                />
              </ListItemAvatar>
              <ListItemText primary={user?.name} />
            </ListItem>
            <Divider />
          </>
        )}
        {!isMimi && (
          <ListItem sx={{ pt: 2 }}>
            <OutlinedInput
              size="small"
              placeholder="Search"
              fullWidth
              endAdornment={<IconSearch />}
            />
          </ListItem>
        )}
        {items?.map((item, index) => (
          <NavMenuItem key={index} item={item} isMimi={isMimi} />
        ))}
      </List>
    </Box>
  );
};

const NavMenuItem: FC<{ item: TMenuItem; isMimi?: boolean }> = ({
  item,
  isMimi,
}) => {
  const navigate = useNavigate();
  const match = useMatch({ path: item.link || "/", end: item.link === "/" });
  const isActive = Boolean(item.link && match);
  const listItem = (
    <ListItem disablePadding>
      <ListItemButton
        selected={isActive}
        sx={{
          color: (theme) => (isActive ? theme.palette.primary.main : undefined),
        }}
        onClick={() =>
          item.onClick
            ? item.onClick()
            : item.link
              ? navigate(item.link)
              : undefined
        }
      >
        {item.icon && (
          <ListItemIcon sx={{ color: "inherit", minWidth: 44 }}>
            {item.icon}
          </ListItemIcon>
        )}
        {item.label && <ListItemText primary={item.label} />}
      </ListItemButton>
    </ListItem>
  );

  if (isMimi) {
    if (item.divider || item.group) return null;

    return (
      <Tooltip title={item.label} placement="right" arrow>
        {listItem}
      </Tooltip>
    );
  }

  if (item.divider) return <Divider />;

  if (item.group) return <ListSubheader>{item.label}</ListSubheader>;

  return listItem;
};
