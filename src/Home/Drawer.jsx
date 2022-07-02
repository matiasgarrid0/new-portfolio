import React, { useState } from "react";
import { SwipeableDrawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export const Drawer = () => {
  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            anchor={anchor}
            open={state[anchor]}
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div className="div-drawer-contain">
              <div className="div-container-menu-mobile">
                <a href="/">HOME</a>
                <a href="/">PROJECTS</a>
                <a href="/">CONTACT ME</a>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
