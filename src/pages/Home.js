import React from "react";
import Login from "./Login";

export default function Home() {
  return (
    <div className="home-container">
      <div className="left">
        <h1 class="logo">Connecty</h1>
        <h2>a beautiful place to connect with the world!</h2>
        <p>
          made with love{" "}
          <span role="img" aria-label="df">
            &#128151;
          </span>
        </p>
      </div>
      <div className="right">
        <Login />
      </div>
    </div>
  );
}
