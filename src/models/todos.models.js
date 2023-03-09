const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    statusID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'status_id',
    },
    categoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    },
});

module.exports = Todos;