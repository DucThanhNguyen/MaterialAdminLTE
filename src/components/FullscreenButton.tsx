import { IconButton, IconButtonProps } from "@mui/material";
import { IconArrowsMaximize, IconArrowsMinimize } from "@tabler/icons-react";
import { FC, useState } from "react";

/* View in fullscreen */
function openFullscreen(element: any) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    /* Safari */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE11 */
    element.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ((document as any).webkitExitFullscreen) {
    /* Safari */
    (document as any).webkitExitFullscreen();
  } else if ((document as any).msExitFullscreen) {
    /* IE11 */
    (document as any).msExitFullscreen();
  }
}

export const FullscreenButton: FC<IconButtonProps> = ({
  color,
  onClick,
  ...props
}) => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <IconButton
      color={color || "inherit"}
      onClick={(e) => {
        if (fullscreen) closeFullscreen();
        else openFullscreen(document.documentElement);
        setFullscreen(!fullscreen);
        onClick && onClick(e);
      }}
      {...props}
    >
      {fullscreen ? (
        <IconArrowsMinimize strokeWidth={1.5} />
      ) : (
        <IconArrowsMaximize strokeWidth={1.5} />
      )}
    </IconButton>
  );
};
