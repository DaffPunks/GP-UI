import React, { useEffect, useRef, useState } from "react";
import styles from "./Player.module.scss";
import ReactPlayer from "react-player";
import socket from "../../service/sockets";
import { ClientEvent, ServerEvent } from "../../shared/constants";

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const [link, setLink] = useState(
    "https://www.youtube.com/watch?v=5Jdc28dkM_Q"
  );
  const ref = useRef<ReactPlayer>(null);

  useEffect(() => {
    socket.on(ServerEvent.StateUpdate, (data) => {
      setPlaying(data.isPlaying);
      if (ref.current) {
        ref.current.seekTo(data.timing, "seconds");
      }
    });
    socket.on(ServerEvent.ChangeSrc, (data) => {
      if (link !== data.src) {
        setLink(data.src);
      }
    });
  }, [link]);

  return (
    <div className={styles.Player}>
      <ReactPlayer
        ref={ref}
        width={"100%"}
        height={"100%"}
        controls={true}
        playsinline
        config={{
          youtube: {
            playerVars: { autoplay: 1, mute: 1 },
          },
        }}
        playing={playing}
        onPlay={() => {
          if (!playing && ref.current) {
            setPlaying(true);
            socket.emit(ClientEvent.Play, ref.current.getCurrentTime());
          }
        }}
        onPause={() => {
          if (playing && ref.current) {
            setPlaying(false);
            socket.emit(ClientEvent.Pause, ref.current.getCurrentTime());
          }
        }}
        url={link}
      />
    </div>
  );
};

export default Player;
