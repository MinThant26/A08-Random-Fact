const express = require("express");
const fact = require("./modules/fact");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname + '/public')));

app.get('/random-fact', (req,res) => {
    res.status(200).send(fact.random());
});

app.get('/facts', (req,res) => {
    res.status(200).send(fact.json());
});

app.listen(
    PORT,
    () => {
        console.log(`App is running http://localhost:${PORT}`);
    }
);