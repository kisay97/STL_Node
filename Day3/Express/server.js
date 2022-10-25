// 모듈 가져오기
const http = require('http');
const express = require('express');
const { nextTick } = require('process');

// 객체 생성.
const app = express();
// 포트 번호 설정.
const port = 3000;

// 요청 응답 설정.
app.use((req, res, next)=>{
    console.log('첫 번째 응답');
    next();
});
app.use((req, res, next)=>{
    console.log('두 번째 응답');
    next();
});
app.use((req,res) => {
    console.log('세 번째 응답');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello Express Server');
});

// 서버 생성 및 요청 대기
const server = http.createServer(app);
server.listen(port);
console.log("server started");

// app.get('/', (req,res) => {
//     res.send('Hello World!');
// });

// app.listen(port, ()=>{
//     console.log(`Example app listening on port ${port}`);
// })