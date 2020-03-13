const Sequelize = require('sequelize');
const CompanyModel = require('../models/company');
const StudentModel = require('../models/student');
const Event = require('../models/event');

const options = {
    freezeTableName: true,
};

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    define: { ...options },
});

const Students = StudentModel(sequelize, Sequelize);
const Company = CompanyModel(sequelize, Sequelize);
const Events = Event(sequelize, Sequelize);

Events.belongsTo(Students);
Events.belongsTo(Company);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection established!');
    })
    .catch((err) => {
        console.log('Unable to connect to the database: ', err);
    })

sequelize.sync()
    .then(() => {
        console.log('DB Created Successfully...');
    }).catch(err => {
        console.log('DB Creation Error: ', err.message);
})

module.exports.sequelize = sequelize;
module.exports.Student = Students;
module.exports.Company = Company;
module.exports.Event = Events;
