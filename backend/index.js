const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const loginHandler = require('./src/routes/entryLogin');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', loginHandler);

app.listen('3001', () => {
    console.log('Handshake backend running on port 3001');
});
