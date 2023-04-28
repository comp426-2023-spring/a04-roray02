import {rps} from "./lib/rpsls.js";
import {rpsls} from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";

const args2 = minimist(process.argv.slice(2));

const app = express();
const port = args2.port || 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/app', (req, res) => {
    res.status(200).send("200 OK");
})

app.get('/app/rps/', (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
})

app.get('/app/rpsls/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
})

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
})

app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})

app.get('/app/*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port);
