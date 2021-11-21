import {ClientEvent, ServerEvents} from 'shared/constants';
import {io} from './index';
import store from './store'

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit(ServerEvents.StateUpdate, store.get());

    socket.on(ClientEvent.ChangeSrc, (src) => {
        store.set({src});
        socket.emit(ServerEvents.ChangeSrc, store.get());
    })

    socket.on(ClientEvent.Pause, () => {
        store.set({isPlaying: false});
        socket.emit(ServerEvents.StateUpdate, store.get());
    });

    socket.on(ClientEvent.Play, () => {
        store.set({isPlaying: true});
        socket.emit(ServerEvents.StateUpdate, store.get());
    });

    socket.on(ClientEvent.Seek, (timing) => {
        store.set({timing});
        socket.emit(ServerEvents.StateUpdate, store.get());
    });
});
