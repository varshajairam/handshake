const Sequelize = require('sequelize');

const options = {
    freezeTableName: true,
    timestamps: false,
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

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection established!');
    })
    .catch((err) => {
        console.log('Unable to connect to the database: ', err);
    })

module.exports.sequelize = sequelize;
