const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const educationModel = sequelize.define('education', {
    college_name: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    degree: { type: Sequelize.STRING },
    major: { type: Sequelize.STRING },
    year_of_passing: { type: Sequelize.INTEGER },
    cgpa: { type: Sequelize.DOUBLE },
    student_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'student',
            key: 'id',
        },
    },
});

module.exports = educationModel;
