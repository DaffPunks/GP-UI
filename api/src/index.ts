import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

export const app = express();
export const server = http.createServer(app);
export const io = new Server(server);

app.get('/', function(req, res) {
    res.send('hello world');
});

server.listen(3000, () => {
    console.log('listening on localhost:3000');
});
