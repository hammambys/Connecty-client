import React, { useContext } from "react";
import { Item } from "semantic-ui-react";
import { AuthContext } from "../context/auth";

function AccountButton() {
  const { user } = useContext(AuthContext);
  const accountButton = (
    <Item.Group link>
      <Item>
        <Item.Image
          size="mini"
          circular
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Item.Content>
          <Item.Header>{user.username}</Item.Header>
          <Item.Meta>
            <span className="price">@{user.username}</span>
          </Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  );

  return accountButton;
}

export default AccountButton;
