const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Status = db.define('status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'pending'
    },
});

module.exports = Status;