import logo from "../../assets/icons/GP.svg";
import mujik from "../../assets/icons/mujik.svg";
import loopa from "../../assets/icons/loopa.svg";
import styles from "./SearchBar.module.scss";
import useDetectMouseMove from "../../hooks/useDetectMouseMove";

const SearchBar = () => {
  const mouseMoving = useDetectMouseMove(5000);

  return (
    <div
      className={`${!mouseMoving ? styles.SearchBarHidden : null} ${
        styles.SearchBar
      }`}
    >
      <div className={styles.Box}>
        <img className={styles.Logo} src={logo} />
      </div>
      <div className={styles.SearchBox}>
        <img className={styles.SearchIcon} src={loopa} />
        <input className={styles.Input} type={"text"} />
      </div>
      <div className={styles.Box}>
        <img className={styles.Profile} src={mujik} />
      </div>
    </div>
  );
};

export default SearchBar;
