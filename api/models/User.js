const {DataTypes} = require('sequelize')
const sequelize = require('../db/db');
const Favorites = require('./Favorites');

const Users = sequelize.define(
    "Users", 
    {
        id : {
            type: DataTypes.UUID,
            allowNull : false,
            primaryKey : true,
            defaultValue: DataTypes.UUIDV4, //
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            isEmail : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }
)

Users.hasMany(Favorites, {
    foreignKey : "userId",
    sourceKey : 'id'
});
Favorites.belongsTo(Users, {
    foreignKey : 'userId',
    targetId : 'id'
});

module.exports = Users;