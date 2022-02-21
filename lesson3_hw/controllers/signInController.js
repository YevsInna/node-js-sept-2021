const users = require("../dataBase/users");

let error = '';

class SignInController {
    renderSignIn(req, res) {
        res.render('signIn');
    }

    renderUser({body}, res) {
        const user = users.find(user => user.email === body.email && user.password === body.password);

        if (!user) {
            error = 'Incorrect data entered!';
            res.redirect('error');
            return;
        }
        res.redirect(`/users/${user.id}`);
    }
}

module.exports = new SignInController();