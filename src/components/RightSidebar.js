import React, { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

function RightSidebar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = (
    <Menu pointing secondary vertical>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
    </Menu>
  );

  return menuBar;
}

export default RightSidebar;
