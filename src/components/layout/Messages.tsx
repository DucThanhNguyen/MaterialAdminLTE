import {
  Badge,
  Divider,
  IconButton,
  IconButtonProps,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { IconMessage } from "@tabler/icons-react";
import { FC, MouseEvent, ReactNode, useState } from "react";
import { LetterAvatar } from "../LetterAvatar";

export type TMessage = {
  avatar?: string;
  name: string;
  message: string;
  time: string;
  action?: ReactNode;
  onClick?: () => void;
};

interface Props extends IconButtonProps {
  items: TMessage[];
}

export const Messages: FC<Props> = ({ items, color, onClick, ...props }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
        <Badge badgeContent={items.length} color="error">
          <IconMessage strokeWidth={1.5} />
        </Badge>
      </IconButton>
      <Menu
        id="messages-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList sx={{ width: 300, p: 0 }}>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                if (item.onClick) item.onClick();
                handleClose();
              }}
            >
              {item.avatar && (
                <ListItemAvatar>
                  <LetterAvatar name={item.name} src={item.avatar} size={48} />
                </ListItemAvatar>
              )}
              <ListItemText
                primary={item.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.message}
                    </Typography>
                    {item.time}
                  </>
                }
              />
              {item.action}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemText sx={{ textAlign: "center" }}>
              See All Messages
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
