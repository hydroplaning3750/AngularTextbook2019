import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import { AddressInfo } from "net";

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

//Creates the parser to turn the payload req.body into JSON
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello from Rest Server Angular Post!'));
//Creates an endpoint for handling POST requests
app.post('/api/product', (req, res) => {
    console.log(`Received new product ${req.body.title} - $${req.body.price}`);    //Logs the payload of the POST request

    res.json({'message':`Server responded: added ${req.body.title} - $${req.body.price}`});  //Sends the confirmation message to the client
});

const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address() as AddressInfo;
    console.log(`Listening on ${address}: ${port}`);
});