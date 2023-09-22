const sequelize  = require('../db/db')
const {DataTypes} = require('sequelize')
const Favorites = sequelize.define(
    "Favorites" , {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement: true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        status : {
            type : DataTypes.STRING,
            allowNull : false
        },
        species : {
            type : DataTypes.STRING,
            allowNull : false
        },
        gender : {
            type : DataTypes.STRING,//,
            allowNull : false
        },
 
        image : {
            type : DataTypes.STRING,
            allowNull : false
        },
});

module.exports = Favorites;