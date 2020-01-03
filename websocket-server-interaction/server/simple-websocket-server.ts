import * as express from "express";
import * as path from "path";
import { Server } from "ws";    //Use Server from ws module to instantiate a WebSocket server

const app = express();

//HTTP server
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../simple-websocket-client.html')));

const httpServer = app.listen(8000, 'localhost', () => {
    console.log('HTTP server is listening on localhost:8000');
});

//WebSocket server
const wsServer = new Server({port: 8085});
console.log('WebSocket server is listening on localhost:8085');
// const wsServer = new Server({server: httpServer});
// console.log('WebSocket server is listening on localhost:8000');

wsServer.on('connection',   //Listens to connection event from clients
    wsClient => {
        wsClient.send('This message was pushed by the WebSocket server. It will be displayed in the inner HTML, my dude!');   //Pushes the message to the newly connected client
        wsClient.onError = (error) => console.log(`The server received the following error: ${error['code']}`); //Handle connection errors
    }
);