"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const products = [
    { id: 0, title: 'First Product', price: 24.99 },
    { id: 1, title: 'Second Product', price: 34.99 },
    { id: 2, title: 'Third Product', price: 44.99 }
];
function getProducts() {
    return products;
}
function getProductById(id) {
    return products.find(p => p.id == id);
}
app.get('/', (req, res) => {
    res.send('The URL for products is http://localhost:8000/api/products');
});
app.get('/api/products', (req, res) => {
    res.json(getProducts());
});
app.get('/api/products/:id', (req, res) => {
    res.json(getProductById(parseInt(req.params.id)));
});
const server = app.listen(8000, "localhost", () => {
    console.log('Listening on localhost:8000');
});
