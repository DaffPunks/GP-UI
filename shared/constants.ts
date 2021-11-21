export enum ServerEvent {
    StateUpdate = 'SERVER_STATE_UPDATE',
    ChangeSrc = 'SERVER_CHANGE_SRC',
}

export enum ClientEvent {
    ChangeSrc = 'SERVER_CHANGE_SRC',
    Pause = 'CLIENT_PAUSE',
    Play = 'CLIENT_PLAY',
    Seek = 'CLIENT_SEEK',
}
