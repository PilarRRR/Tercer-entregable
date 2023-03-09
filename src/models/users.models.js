const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        },
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

module.exports = Users;