import {io} from './index';

io.on('connection', () => {
    console.log('a user connected');
});