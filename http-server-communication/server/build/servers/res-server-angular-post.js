"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
//Creates the parser to turn the payload req.body into JSON
app.use(bodyParser.json());
//Creates an endpoint for handling POST requests
app.post('/api/product', (req, res) => {
    console.log(`Received new product ${req.body.title} ${req.body.price}`); //Logs the payload of the POST request
    res.json({ 'message': `Server responded: added ${req.body.title}` }); //Sends the confirmation message to the client
});
const server = app.listen(8000, "localhost", () => {
    const { address, port } = server.address();
    console.log(`Listening on ${address}: ${port}`);
});
