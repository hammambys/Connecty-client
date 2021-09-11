import React from "react";
import Notifications from "react-notifications-menu";

const data = [
  {
    image: "https://react.semantic-ui.com/images/avatar/large/molly.png",
    message: "Lorem ipsum dolor sit amet.",
    detailPage: "/events",
    receivedTime: "12h ago",
  },
];

const NotificationsMenu = () => <Notifications data={data} width="300px" />;

export default NotificationsMenu;
