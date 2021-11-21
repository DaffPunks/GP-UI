import { ClientEvent, ServerEvent } from "../../ui/src/shared/constants";
import { io } from "./index";
import store from "./store";

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit(ServerEvent.StateUpdate, store.get());

  socket.on(ClientEvent.ChangeSrc, (src) => {
    store.set({ src });
    socket.emit(ServerEvent.ChangeSrc, store.get());
  });

  socket.on(ClientEvent.Pause, (timing) => {
    store.set({ isPlaying: false, timing });
    socket.broadcast.emit(ServerEvent.StateUpdate, store.get());
  });

  socket.on(ClientEvent.Play, (timing) => {
    store.set({ isPlaying: true, timing });
    socket.broadcast.emit(ServerEvent.StateUpdate, store.get());
  });

  // socket.on(ClientEvent.Seek, (timing) => {
  //   store.set({ timing });
  //   socket.emit(ServerEvent.StateUpdate, store.get());
  // });

  socket.on(ClientEvent.StateUpdate, (state) => {
    store.set(state);
    socket.broadcast.emit(ServerEvent.StateUpdate, store.get());
  });
});
