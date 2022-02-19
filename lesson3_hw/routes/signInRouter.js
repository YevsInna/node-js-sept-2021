const {Router} = require('express');
const users = require('../dataBase/users');
const signInController = require('../controllers/signInController');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);

signInRouter.post('/', signInController.renderUser);


module.exports = signInRouter;