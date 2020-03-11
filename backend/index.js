const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.static('uploads'));

const loginHandler = require('./src/routes/student/entryLogin');
const studentProfileHandler = require('./src/routes/student/profile');
const companyHandler = require('./src/routes/company/entryLogin');
const jobHandler = require('./src/routes/student/job');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', loginHandler);
app.use('/profile', studentProfileHandler);
app.use('/jobs', jobHandler);
app.use('/company', companyHandler);

app.listen('3001', () => {
    console.log('Handshake backend running on port 3001');
});
