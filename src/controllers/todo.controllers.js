const TodosServices = require('../services/todo.services')

const createTodo = async (req, res) => {
    try {
        const newTodo = req.body;
        const post = await TodosServices.create(newTodo);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json(error)
    }
};

const updateTodo = async (req, res) => {
        try {
            const { id } = req.params;
            const UpdateTodoData = req.body;
            await TodosServices.update(id, updateTodoData);
            res.status(204).send();
        } catch (error) {
            res.status(400).json(error)
        }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodosServices.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo
}