let users = require("../dataBase/users");

let error = '';

class UserController {

    renderUsers({query}, res) {
        if (Object.keys(query).length) {
            let usersWithQuery = [...users];

            if (query.city) {
                usersWithQuery = usersWithQuery.filter(user => user.city === query.city);
            }

            if (query.age) {
                usersWithQuery = usersWithQuery.filter(user => user.age === query.age)
            }

            res.render('users', {users: usersWithQuery});

            return;
        }

        res.render('users', {users});
    }

    getUserById({params}, res) {
        const user = users.find(user => user.id === +params.userId);

        if (!user) {
            error = `User with ID # ${params.userId}  is not found!`;
            res.redirect('/error');
            return;
        }
        res.render('user', {user});
    }

    deleteUserById({params}, res) {
        users = users.filter(user => user.id !== +params.userId);
        res.redirect('/users')
    }
}

module.exports = new UserController();