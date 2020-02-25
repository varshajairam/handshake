const Sequelize = require('sequelize');
const { sequelize } = require('../../../db/sequelize');

const basicDetailsModel = sequelize.define('basicDetails', {
    student_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    education_level: { type: Sequelize.STRING },
    profile_pic: { type: Sequelize.BLOB },
});

module.exports = basicDetailsModel;
