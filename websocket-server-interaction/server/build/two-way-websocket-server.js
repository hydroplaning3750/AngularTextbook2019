"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
let wsServer = new ws_1.Server({ port: 8085 });
console.log('WebSocket server is listening on port: 8085');
wsServer.on('connection', //Fires when a new client connects
//Fires when a new client connects
webSocket => {
    webSocket.send('Hello from the two-way WebSocket server!'); //Greet the client
    webSocket.onmessage = (msg) => console.log(`The server received: ${msg['data']}`); //Listen to the message from the client
    webSocket.onerror = (err) => console.log(`The server received an error: ${err['code']}`);
    webSocket.onclose = (conn) => console.log(`The server received a disconnection: ${conn.code} - ${conn.reason}`);
});
