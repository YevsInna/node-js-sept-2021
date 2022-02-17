

// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера


const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const users = [];

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));


app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/users', (req, res) => {
    res.render('users', {users})
});
app.get('/users/:userId',(req,res)=>{
    const {userId} = req.params
    res.json(users[userId])
})
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку
// з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
app.post('/login', (req, res) => {

    users.push(req.body)
    res.redirect('/users')
});

app.use((req,res)=>{
    res.render('notFound')
})
app.listen(5200, () => {
    console.log('Server started on PORT 5200')
});