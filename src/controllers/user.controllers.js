const UsersServices = require('../services/user.services')

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

const UpdateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const UpdateUserData = req.body;
        await UsersServices.update(id, updateUserData);
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    createUser,
    UpdateUser
}