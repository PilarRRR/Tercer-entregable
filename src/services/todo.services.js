const Todos = require('../models/todos.models');

class TodosServices {
    static async create(newTodo) {
        try {
            const result = await Todos.create(newTodo)
        } catch (error) {
            throw error;
        }
    }

    static async update (id, updateTodoData) {
        try {
            const updatedTodo = await Todos.update(updateTodoData, {
                where : { id }
            });
            return updatedTodo;
        } catch (error) {
            throw error;
        }
    }

    static async delete (id) {
        try {
            const result = Todos.destroy({
                where: {id}
            });
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodosServices;