import {
  Badge,
  Divider,
  IconButton,
  IconButtonProps,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { IconBell } from "@tabler/icons-react";
import { FC, MouseEvent, ReactNode, useMemo, useState } from "react";

export type TNotification = {
  icon: ReactNode;
  count: number;
  text: string;
  lastUpdated: string;
  onClick?: () => void;
};

interface Props extends IconButtonProps {
  items: TNotification[];
}

export const Notifications: FC<Props> = ({
  items,
  color,
  onClick,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const total = useMemo(
    () => items.map((x) => x.count).reduce((a, b) => a + b, 0),
    [items],
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    if (onClick) onClick(event);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color={color || "inherit"}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        {...props}
      >
        <Badge badgeContent={total} color="error">
          <IconBell strokeWidth={1.5} />
        </Badge>
      </IconButton>
      <Menu
        id="notifications-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList sx={{ width: 280, p: 0 }}>
          <MenuItem>
            <ListItemText sx={{ textAlign: "center", color: "text.secondary" }}>
              {total} Notifications
            </ListItemText>
          </MenuItem>
          <Divider />
          {items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                if (item.onClick) item.onClick();
                handleClose();
              }}
            >
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText>
                {item.count} {item.text}
              </ListItemText>
              <Typography variant="body2" color="text.secondary">
                {item.lastUpdated}
              </Typography>
            </MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemText sx={{ textAlign: "center" }}>
              See All Notifications
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
