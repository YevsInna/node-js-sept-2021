const {Router} = require('express');
const users = require('../dataBase/users');
const userController = require('../controllers/userController');

const userRouter = Router();

//               '/users':
userRouter.get('/', userController.renderUsers);

//                  '/users/userId'
userRouter.get('/:userId', userController.getUserById);

userRouter.post('/:userId', userController.deleteUserById);

module.exports = userRouter;