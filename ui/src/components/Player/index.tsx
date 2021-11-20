import bg from "../../assets/image.png";
import React from "react";
import styles from "./Player.module.scss";

const Player = () => {
  return <img className={styles.Player} src={bg} />;
};

export default Player;
