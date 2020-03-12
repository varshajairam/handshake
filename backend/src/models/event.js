const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');
const studentModel = require('../models/student');

const eventModel = sequelize.define('event', {
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    date: {
        type: Sequelize.DATE,
    },
    time: {
        type: Sequelize.TIME,
    },
    eligibility: {
        type: Sequelize.STRING,
    },
    location: {
        type: Sequelize.STRING,
        required: true,
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'NOT REGISTERED',
    },
    company_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'company',
            key: 'id',
        },
    },
});

module.exports = eventModel;
