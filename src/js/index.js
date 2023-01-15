const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connect');
const results = require('./results');

const PORT = 8080;
const HOST = 'localhost';
const app = express();
connection.connect();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', results);

app.listen(PORT, () => {
    console.log(`Service starts on http://${HOST}:${PORT}`);
});