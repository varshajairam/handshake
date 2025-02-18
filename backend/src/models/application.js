const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const applicationModel = sequelize.define('application', {
    resume: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'Pending',
    },
    applied_date: {
        type: Sequelize.DATE,
    },
    job_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'job',
            key: 'id',
        },
    },
    student_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'student',
            key: 'id',
        },
    }
});

module.exports = applicationModel;
