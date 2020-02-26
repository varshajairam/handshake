const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const experienceModel = sequelize.define('experience', {
    company_name: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    start_date: { type: Sequelize.DATE },
    end_date: { type: Sequelize.DATE },
    title: { type: Sequelize.STRING },
    work_description: { type: Sequelize.STRING },
    student_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'student',
            key: 'id',
        },
    },
});

module.exports = experienceModel;
