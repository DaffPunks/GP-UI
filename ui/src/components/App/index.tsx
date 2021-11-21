import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Player from "../Player";
import "./App.scss";
import styles from "./App.module.scss";
import { io } from "socket.io-client";

const socket = io("http://localhost:3030");
socket.on("connect", () => console.log(socket));

const App = () => {
  const [link, setLink] = useState("");
  return (
    <div className={styles.App}>
      <SearchBar setLink={setLink} />
      <Player link={link} />
    </div>
  );
};

export default App;
