import { io } from "socket.io-client";
import { ServerEvent } from "../shared/constants";

const socket = io("http://51.250.10.45:3030");

export const socketApi = () => {
  socket.on(ServerEvent.StateUpdate, (data) => {
    // console.log(data);
  });
};

export default socket;
