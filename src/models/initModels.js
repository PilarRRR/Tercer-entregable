const Users = require('./users.models');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const Status =  require('./status.models');

const initModels = () => {
    Users.hasMany(Todos, { foreignKey: 'id' });
    Todos.belongsTo(Users, { foreignKey: 'id'});

    Categories.hasMany(Todos, { foreignKey: 'category_id'});
    Todos.belongsTo(Categories, {foreignKey: 'category_id'});

    Status.hasMany(Todos, {foreignKey: 'status_id'});
    Todos.belongsTo(Status, {foreignKey : 'status_id'});
}

module.exports = initModels;