import React, { useContext, useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { AuthContext } from "../context/auth";

function LeftMenu() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = (
    <Menu className="menu-home" pointing vertical>
      <Menu.Item
        name="Home"
        className="menu-home-item"
        color="brown"
        active={activeItem === "Home"}
        onClick={handleItemClick}
      >
        <Icon color="brown" name="home" />
        Home
      </Menu.Item>
      <Menu.Item
        name="Messages"
        className="menu-home-item"
        color="brown"
        active={activeItem === "Messages"}
        onClick={handleItemClick}
      >
        <Icon color="brown" name="comment alternate" />
        Messages
      </Menu.Item>
      <Menu.Item
        name="Profile"
        className="menu-home-item"
        color="brown"
        active={activeItem === "Profile"}
        onClick={handleItemClick}
      >
        <Icon color="brown" name="user" />
        Profil
      </Menu.Item>

      <Menu.Item
        name="Saved posts"
        className="menu-home-item"
        color="brown"
        active={activeItem === "Saved posts"}
        onClick={handleItemClick}
      >
        <Icon color="brown" name="tag" />
        Saved Posts
      </Menu.Item>

      <Menu.Item
        name="Settings"
        className="menu-home-item"
        color="brown"
        active={activeItem === "Settings"}
        onClick={handleItemClick}
      >
        <Icon color="brown" name="setting" />
        Settings
      </Menu.Item>
    </Menu>
  );

  return menuBar;
}

export default LeftMenu;
