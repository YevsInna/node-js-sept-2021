// Завдання на практику
const fs = require('fs');
const path = require("path");

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
//     в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

// fs.writeFile(path.join(__dirname, 'file.txt'),
//     'There is some very important iformation in this file))',
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         fs.readFile(path.join(__dirname, 'file.txt'),
//             'utf-8',
//             (err1, data) => {
//                 if (err1) {
//                     console.log(err1);
//                     throw err1;
//                 }
//                 fs.writeFile(path.join(__dirname, 'file2.txt'),
//                     data,
//                     (err2) => {
//                         if (err2) {
//                             console.log(err2);
//                             throw err2;
//                         }
//                     });
//             });
//
//     });

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
//     старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// fs.writeFile(
//     path.join(__dirname, 'file3.txt'),
//     'Some information',
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         fs.readFile(path.join(__dirname, 'file3.txt'),
//             'utf-8',
//             (err1, data) => {
//                 if (err1) {
//                     console.log(err1);
//                     throw err1;
//                 }
//                 fs.mkdir(path.join(__dirname, 'newDir'),
//                     (err2) => {
//                         if (err2) {
//                             console.log(err2);
//                             throw err2;
//                         }
//                         fs.writeFile(path.join(__dirname, 'newDir', 'file4.txt'),
//                             data,
//                             (err3) => {
//                                 if (err3) {
//                                     console.log(err3);
//                                     throw err3;
//                                 }
//                                 fs.unlink(path.join(__dirname, 'file3.txt'),
//                                     (err4) => {
//                                         if (err4) {
//                                             console.log(err4);
//                                             throw err4;
//                                         }
//                                     });
//                             });
//                     });
//             });
//     });


// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// fs.mkdir(path.join(__dirname, 'newDir2'),
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
//
// fs.mkdir(path.join(__dirname, 'newDir2', 'public'),
//     {recursive: true},
//     (err1) => {
//         if (err1) {
//             console.log(err1);
//             throw err1;
//         }
//         fs.writeFile(path.join(__dirname, 'newDir2', 'public', 'file4.txt'),
//             'Some text',
//             (err2) => {
//                 if (err2) {
//                     console.log(err2);
//                     throw err2;
//                 }
//             });
//     });
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити,
//     але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

function pathCheck() {
    fs.readdir(path.join(__dirname, 'newDir2'),
        (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }
            data.forEach((item) => {
                fs.stat(path.join(__dirname, 'newDir2', item),
                    (err1, stats) => {
                        if (err1) {
                            console.log(err1);
                            throw err1;
                        }
                        if (stats.isFile()) {
                            fs.truncate(path.join(__dirname, 'newDir2', item),
                                (err3) => {
                                    if (err3) {
                                        console.log(err3);
                                        throw err3
                                    } else {
                                        fs.rename(path.join(__dirname, 'newDir2', item),
                                            path.join(__dirname, 'newDir2', `_new${item}`),
                                            (err4) => {
                                                if (err4) {
                                                    console.log(err4);
                                                    throw err4;
                                                }
                                            });
                                    }
                                });
                        }
                    });
            });
        });
};

pathCheck();
