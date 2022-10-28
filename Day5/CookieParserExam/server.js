// 모듈 가져오기.
const express = require('express');
const cookieParser = require('cookie-parser');

function start() {

    // express 객체 생성.
    const app = express();

    // 미들웨어 설정 - Cookie Parser.
    app.use(cookieParser());

    // 라우팅 설정.
    app.get('/get', (request, response) => {
        // 쿠키를 읽어서 응답.
        response.send(request.cookies);
    });

    app.get('/set', (request, response) => {
        // 쿠키 생성.
        response.cookie('string', 'cookie');
        response.cookie('json', {
            name : 'ronniej',
            position : 'lecturer'
        });

        // 응답 - 리디렉션.
        response.redirect('/get');
    });

    // 요청 대기.
    app.listen(3000);
    console.log('서버 실행 중');
}

// 모듈 내보내기.
module.exports = {
    start
}