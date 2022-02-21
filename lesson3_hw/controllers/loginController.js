const users = require("../dataBase/users");

let error = '';

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    verification({body}, res) {
        const isUserAlreadyExist = users.some(user => user.email === body.email);

        if (isUserAlreadyExist) {
            error = 'Such email already exist!  Sign up with another email.';
            res.redirect('error');
            return;
        }
        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users')
    }
}

module.exports = new LoginController();