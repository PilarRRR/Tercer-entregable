const { Router } = require('express');
const Categories = require('../models/categories.models');
const Todos = require('../models/todos.models');
const Users = require('../models/users.models')

const router = Router();


router.get('/api/v1/users/:id/todos', async (req, res) => {
    try {
        const {id} = req.params;
        const userTodos = await Users.findByPk(id, { 
            attributes: ['username'],
            include: {
                model: Todos,
                attributes: ['title', 'description', 'category_id', 'status_id'],
                include: {
                    model: Categories,
                    attributes: ['name']
                }
            }
        });
        res.json(userTodos);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;