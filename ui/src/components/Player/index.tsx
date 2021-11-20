import bg from "../../assets/image.png";
import React from "react";
import styles from "./Player.module.scss";
import ReactPlayer from "react-player";

type Player = {
  link: string;
};

const Player = ({ link }: Player) => {
  return (
    <div className={styles.Player}>
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        controls={true}
        url={link || "https://www.youtube.com/watch?v=ysz5S6PUM-U"}
      />
    </div>
  );
};

export default Player;
