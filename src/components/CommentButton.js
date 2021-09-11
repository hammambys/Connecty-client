import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Button, Label, Icon } from "semantic-ui-react";

import MyPopup from "../util/MyPopup";

function CommentButton({ user, post: { id, commentCount } }) {
  const commentInputRef = useRef(null);
  const [comment, setComment] = useState("");

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment("");
      commentInputRef.current.blur();
    },
    variables: {
      id,
      body: comment,
    },
  });

  const commentButton = user ? (
    <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
      <Button color="red" basic>
        <Icon name="comments" />
      </Button>
    </Button>
  ) : (
    <Button as={Link} to="/login" color="teal" basic>
      <Icon name="comments" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={submitComment}>
      <MyPopup content={"Comment"}>{commentButton}</MyPopup>
      <Label basic color="teal" pointing="left">
        {commentCount}
      </Label>
    </Button>
  );
}

const SUBMIT_COMMENT_MUTATION = gql`
  mutation ($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;

export default CommentButton;
