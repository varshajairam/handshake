const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const jobModel = sequelize.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    posting_date: {
        type: Sequelize.DATE,
    },
    app_deadline: {
        type: Sequelize.DATE,
    },
    location: {
        type: Sequelize.STRING,
        required: true,
    },
    salary: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.STRING,
    },
    job_type: {
        type: Sequelize.STRING,
        required: true,
    },
    company_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'company',
            key: 'id',
        },
    },
});

module.exports = jobModel;
