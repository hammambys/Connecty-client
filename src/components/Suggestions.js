import React, { useContext } from "react";
import { Button, Grid } from "semantic-ui-react";
import AccountButton from "../components/AccountButton";
import { AuthContext } from "../context/auth";

export default function Suggestions() {
  const { user } = useContext(AuthContext);
  return (
    <Grid.Row className="suggestions">
      <Grid.Column floated="left">{user && <AccountButton />}</Grid.Column>
      <Grid.Column floated="right" className="follow-btn">
        {user && (
          <Button size="mini" color="brown">
            Follow
          </Button>
        )}
      </Grid.Column>
    </Grid.Row>
  );
}
