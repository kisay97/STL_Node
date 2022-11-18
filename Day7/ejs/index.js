// 예제 1
// const express = require('express');
// const fs = require('fs');
// const ejs = require('ejs');

// const app = express();
// app.get('/', function(req, res) {
//     fs.readFile('./index.html', function(error, html) {
//         res.send(ejs.render(html.toString()));
//     });
// });

// app.listen(3000);
// console.log('서버 실행 중');

// 예제 2
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
app.get('/', function(req, res) {
    fs.readFile('./index.html', function(error, html) {
        res.send(ejs.render(html.toString(), {
            name : 'Ronnie Jang',
            content : 'ejs 모듈 테스트 중입니다.'
        }));
    });
});

app.listen(3000);
console.log('서버 실행 중');