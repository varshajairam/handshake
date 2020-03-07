const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const loginHandler = require('./src/routes/student/entryLogin');
const studentProfileHandler = require('./src/routes/student/profile');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', loginHandler);
app.use('/profile', studentProfileHandler);

app.listen('3001', () => {
    console.log('Handshake backend running on port 3001');
});
