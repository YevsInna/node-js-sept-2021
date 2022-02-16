const path = require('path');

const fs = require('fs');
//
//
// fs.unlink(path.join(__dirname,'helper.js'), (err => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// }))

// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })

// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
let user1 = {name: "Andrii", age: 22, city: "Lviv"};
let user2 = {name: "Inna", age: 38, city: "Vyshhorod"};
let onlineUsers = [user1];
let inPersonUsers = [user2];

// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
//     але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
// fs.writeFile(path.join(__dirname,'main','inPerson','file.txt'),
//     `\nNAME: ${user1.name}
//     \nAGE: ${user1.age}
//     \nCITY: ${user1.city}`,
//     (err)=>{
// if (err){
//     console.log(err);
//     throw err;
// }
// });

// fs.writeFile(path.join(__dirname,'main','online','file.txt'),
//     `\nNAME: ${user2.name}
//     \nAGE: ${user2.age}
//     \nCITY: ${user2.city}`,
//     (err)=>{
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     });


// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)
function toСhangePlaces() {
    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'),
        (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }
            fs.readFile(path.join(__dirname, 'main', 'online', 'file.txt'),
                (err1, data1) => {
                    if (err1) {
                        console.log(err1);
                        throw err1;
                    }
                    fs.truncate(path.join(__dirname, 'main', 'inPerson', 'file.txt'),
                        (err2) => {
                            if (err2) {
                                console.log(err2);
                                throw err2;
                            }
                            fs.truncate(path.join(__dirname, 'main', 'online', 'file.txt'),
                                (err3) => {
                                    if (err3) {
                                        console.log(err3);
                                        throw err3;
                                    }
                                    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'),
                                        data1,
                                        (err4) => {
                                            if (err4) {
                                                console.log(err4);
                                                throw err4;
                                            }
                                            fs.appendFile(path.join(__dirname, 'main', 'online', 'file.txt'),
                                                data,
                                                (err5) => {
                                                    if (err5) {
                                                        console.log(err5);
                                                        throw err5;
                                                    }

                                                })

                                        })


                                });
                        });
                });

        })
};
toСhangePlaces();

