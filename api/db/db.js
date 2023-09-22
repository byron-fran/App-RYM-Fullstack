const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize('rickandmorty', process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect : 'postgres',
    port : process.env.DB_PORT,
    host: 'localhost'
});

module.exports = sequelize;
