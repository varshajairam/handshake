const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const skillsetModel = sequelize.define('skillset', {
    skill: { type: Sequelize.STRING },
    student_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'student',
            key: 'id',
        },
    },
});

module.exports = skillsetModel;
