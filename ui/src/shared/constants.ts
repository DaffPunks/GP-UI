export enum ServerEvent {
  StateUpdate = "SERVER_STATE_UPDATE",
  ChangeSrc = "SERVER_CHANGE_SRC",
}

export enum ClientEvent {
  StateUpdate = "CLIENT_STATE_UPDATE",
  ChangeSrc = "CLIENT_CHANGE_SRC",
  Pause = "CLIENT_PAUSE",
  Play = "CLIENT_PLAY",
  Seek = "CLIENT_SEEK",
}
