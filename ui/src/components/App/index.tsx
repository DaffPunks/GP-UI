import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Player from "../Player";
import "./App.scss";
import styles from "./App.module.scss";
import { socketApi } from "../../service/sockets";

socketApi();

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
