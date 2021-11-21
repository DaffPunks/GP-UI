import logo from "../../assets/icons/GP.svg";
import mujik from "../../assets/icons/mujik.svg";
import loopa from "../../assets/icons/loopa.svg";
import styles from "./SearchBar.module.scss";
import { KeyboardEvent } from "react";
import { ClientEvent } from "../../shared/constants";
import socket from "../../service/sockets";

const SearchBar = () => {
  const _handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      socket.emit(ClientEvent.ChangeSrc, e.currentTarget.value);
    }
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.Box}>
        <img className={styles.Logo} src={logo} />
      </div>
      <div className={styles.SearchBox}>
        <img className={styles.SearchIcon} src={loopa} />
        <input
          onKeyDown={(e) => _handleKeyDown(e)}
          placeholder={"Paste your link here..."}
          className={styles.Input}
          type={"text"}
        />
      </div>
      <div className={styles.Box}>
        <img className={styles.Profile} src={mujik} />
      </div>
    </div>
  );
};

export default SearchBar;
