"use strict";
//INSTRUCTIONS:
//  npm install @types/node -- installs net dependency for AddressInfo
//  npm i typescript --save-dev -- installs tsc (TypeScript Compiler)
//  npm run tsc OR npx tsc -- starts server, adds static assets to /build dir
//  node build/my-express-server -- begins listening on localhost
//  Navigate to localhost:8000 from a browser!
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
//Creates the parser to turn the payload req.body into JSON
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello from Rest Server Angular Post!'));
//Creates an endpoint for handling POST requests
app.post('/api/product', (req, res) => {
    console.log(`Received new product ${req.body.title} - $${req.body.price}`); //Logs the payload of the POST request
    res.json({ 'message': `Server responded: added ${req.body.title} - $${req.body.price}` }); //Sends the confirmation message to the client
});
const server = app.listen(8000, "localhost", () => {
    const { address, port } = server.address();
    console.log(`Listening on ${address}: ${port}`);
});
