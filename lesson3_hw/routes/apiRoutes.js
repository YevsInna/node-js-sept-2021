const {Router} = require('express');
const userRouter = require('./userRouter');
const signInRouter = require('./signInRouter');
const loginRouter = require('./loginRouter');
const errorRouter = require('./errorRouter');

const routers = Router();

routers.use('/users', userRouter);
routers.use('/login', loginRouter);
routers.use('/signIn', signInRouter);
routers.use('/error', errorRouter);
routers.use((req, res) => {
    res.render('notFound');
});

module.exports = routers;