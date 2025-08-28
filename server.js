const express = require('express');
const { databaseFunction } = require('./database');

const server = express();

server.get('/', (_req, res) => {
    databaseFunction();
    res.send('Hello World!');
});

server.listen(3000, () =>
    console.log('Server is running on http://localhost:3000')
);
