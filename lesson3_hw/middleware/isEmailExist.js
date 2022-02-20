// написати мідлвару яка буде перевіряти по роуту /sigIn чи імейл існує в масиві юзерів
function isEmailExist(req, res, next) {
    try {
        const {email} = req.body;
        if (!email) {
            throw new Error('Email is not provided!')
        }
        next();
    } catch (e) {
        console.log(e.message);
        res.status(400).send(e.message);
    }
}

module.exports = isEmailExist;