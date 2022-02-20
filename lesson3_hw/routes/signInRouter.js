const {Router} = require('express');
const signInController = require('../controllers/signInController');
const isEmailExist = require('../middleware/isEmailExist');
const isAllDataExist = require('../middleware/isAllDataExist');

const signInRouter = Router();

signInRouter.get('/', isEmailExist, signInController.renderSignIn);

signInRouter.post('/', isAllDataExist, signInController.renderUser);


module.exports = signInRouter;