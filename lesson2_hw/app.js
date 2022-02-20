// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [];
let error = '';

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', ({query}, res) => {
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
});
// 3. /user/:id сторінка з інфою про одного юзера
app.get('/users/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);

    if (!user) {
        error = `User with ID # ${params.userId}  is not found!`;
        res.redirect('/error');
        return;
    }

    res.render('user', {user});
});

app.post('/users/:userId', ({params}, res) => {
    // let index = users.findIndex(user => user.id === +params.userId);
    const newUsersArr = users.filter(user => user.id !== +params.userId);
    res.redirect('/users', {users: newUsersArr})
});
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку
// з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
app.post('/login', ({body}, res) => {
    const isUserAlreadyExist = users.some(user => user.email === body.email);

    if (isUserAlreadyExist) {
        error = 'Such email already exist!  Sign up with another email.';
        res.redirect('error');
        return;
    }

    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('/users')
});

app.get('/error', (req, res) => {
    res.render('error', {error});
});

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', ({body}, res) => {
    const user = users.find(user => user.email === body.email && user.password === body.password);

    if (!user) {
        error = 'Incorrect data entered!';
        res.redirect('error');
        return;
    }

    res.redirect(`/users/${user.id}`);
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5200, () => {
    console.log('Server started on PORT 5200');
});

// Необхідно розширити ваше ДЗ:
// - додайте ендпоінт signIn який буде приймати email і password і якщо все вірно то редірект на сторінку цього user
//
// * хто хоче складніше реалізуйте видалення користувача. Кнопка повинна знаходитись на сторінці
// з інфою про одного юзера. Після видалення редірект на "/users"