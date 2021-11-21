import {ClientEvent, ServerEvent} from '../../shared/constants';
import {io} from './index';
import store from './store'

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit(ServerEvent.StateUpdate, store.get());

    socket.on(ClientEvent.ChangeSrc, (src) => {
        store.set({src});
        socket.emit(ServerEvent.ChangeSrc, store.get());
    })

    socket.on(ClientEvent.Pause, () => {
        store.set({isPlaying: false});
        socket.emit(ServerEvent.StateUpdate, store.get());
    });

    socket.on(ClientEvent.Play, () => {
        store.set({isPlaying: true});
        socket.emit(ServerEvent.StateUpdate, store.get());
    });

    socket.on(ClientEvent.Seek, (timing) => {
        store.set({timing});
        socket.emit(ServerEvent.StateUpdate, store.get());
    });
});
