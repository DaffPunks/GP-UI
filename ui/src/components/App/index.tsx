import React from "react";
import SearchBar from "../SearchBar";
import Player from "../Player";
import "./App.scss";
import styles from "./App.module.scss";
import { socketApi } from "../../service/sockets";

socketApi();

const App = () => {
  return (
    <div className={styles.App}>
      <SearchBar />
      <Player />
    </div>
  );
};

export default App;
