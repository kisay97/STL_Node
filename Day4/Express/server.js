// 모듈 가져오기
const express = require('express');
const multiparty = require('connect-multiparty');
const requestHandler = require('./requestHandler');

// 서버 시작함수.
const start = () => {
    
    // 객체 생성.
    const app = express();

    // 미들웨어 설정.
    app.use(multiparty({uploadDir: __dirname + '/uploads'}));

    // 라우팅 설정.
    app.get('/', requestHandler.start);
    app.get('/start', requestHandler.start);
    app.get('/show', requestHandler.show);
    app.get('/favicon.ico', requestHandler.favicon);
    app.post('/upload', requestHandler.upload);
    
    // 서버 생성 및 요청 대기
    app.listen(3000);
    console.log("server started");
}

// 모듈 내보내기.
module.exports = {
    start
}