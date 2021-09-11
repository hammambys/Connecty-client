import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import appStoreImg from "../images/app-play-store.jpg";
import { AuthContext } from "../context/auth";
import LeftMenu from "../components/LeftMenu";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import AccountButton from "../components/AccountButton";
import SearchBar from "../components/SearchBar";
import Suggestions from "../components/Suggestions";
import NotificationsMenu from "../components/NotificationsMenu";

function Home() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns="equal">
      <Grid.Column>
        <h1 class="logo">Connecty</h1>
        <h3>Menu</h3>
        <LeftMenu />
        {user && <h3>Account</h3> && <AccountButton />}
        <Image
          as="a"
          src={appStoreImg}
          size="small"
          href="https://play.google.com/store"
          target="_blank"
        />
      </Grid.Column>

      <Grid.Column width={8}>
        <h1>Feeds</h1>
        {user && <PostForm />}
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Column>
      <Grid columns="2" padded>
        <Grid.Row>
          <NotificationsMenu />
          <SearchBar />
        </Grid.Row>
        <Grid.Row className="suggestions-header">
          <Grid.Column>
            <h4>Suggestions for you</h4>
          </Grid.Column>
          <Grid.Column className="see-all">
            <Link to="/login">See all</Link>
          </Grid.Column>
        </Grid.Row>

        <Suggestions />
      </Grid>
    </Grid>
  );
}

export default Home;
