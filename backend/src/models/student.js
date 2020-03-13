const Sequelize = require('sequelize');
const { sequelize } = require('../db/sequelize');

const studentModel = sequelize.define('student', {
        first_name: { type: Sequelize.STRING },
        last_name: { type: Sequelize.STRING },
        dob: { type: Sequelize.DATE },
        city: { type: Sequelize.STRING },
        state: { type: Sequelize.STRING },
        country: { type: Sequelize.STRING },
        career_obj: { type: Sequelize.STRING },
        email_id: { type: Sequelize.STRING, unique: true, validate: { isEmail: true } },
        password: { type: Sequelize.STRING },
        phone_number: { type: Sequelize.STRING, unique: true },
        profile_pic: { type: Sequelize.STRING },
    });

module.exports = studentModel;
