"use strict";
//INSTRUCTIONS:
//  npm install @types/node -- installs net dependency for AddressInfo
//  npm i typescript --save-dev -- installs tsc (TypeScript Compiler)
//  npm run tsc OR npx tsc -- starts server, adds static assets to /build dir
//  node build/my-express-server -- begins listening on localhost
//  Navigate to localhost:8000 from a browser!
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//Instantiates Express.js
const app = express();
//Matches GET request to the root route
app.get('/', (req, res) => res.send('Hello from Express!'));
//Matches GET request to the /products route
app.get('/products', (req, res) => res.send('Received a request for products'));
//Matches GET request to the /reviews route
app.get('/reviews', (req, res) => res.send('Received a request for reviews'));
//Starts listening on localhost:8000 and executes the code from the lambda
const server = app.listen(8000, 'localhost', () => {
    const { address, port } = server.address();
    console.log(`Listening on ${address}: ${port}`);
});
