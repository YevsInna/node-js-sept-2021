const {Router} = require('express');
const loginController = require('../controllers/loginController');
const isAllDataExist = require('../middleware/isAllDataExist');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);

loginRouter.post('/', isAllDataExist, loginController.verification);

module.exports = loginRouter;