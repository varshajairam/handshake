// const Sequelize = require('sequelize');
// const { sequelize } = require('../db/sequelize');

const companyModel = (sequelize, Sequelize) => {
    return sequelize.define('company', {
        name: { type: Sequelize.STRING },
        city: { type: Sequelize.STRING },
        state: { type: Sequelize.STRING },
        country: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        email_id: { type: Sequelize.STRING, unique: true, validate: { isEmail: true } },
        contact_number: { type: Sequelize.STRING },
        profile_pic: { type: Sequelize.STRING },
    });
};

module.exports = companyModel;
