import { Avatar, AvatarProps } from "@mui/material";
import { FC, useMemo } from "react";

const stringToColor = (string?: string) => {
  if (!string) return "#e91e63";

  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

interface Props extends AvatarProps {
  name?: string;
  size?: number;
}

export const LetterAvatar: FC<Props> = ({ name, size, sx, ...others }) => {
  const bgColor = useMemo(() => stringToColor(name), [name]);
  const avatarName = useMemo(
    () => (name && name.length > 0 ? name[0].toUpperCase() : undefined),
    [name],
  );

  return (
    <Avatar
      alt={name}
      sx={{
        height: size,
        width: size,
        bgcolor: bgColor,
        fontSize: size ? size / 2 : undefined,
        ...sx,
      }}
      {...others}
    >
      {avatarName}
    </Avatar>
  );
};
