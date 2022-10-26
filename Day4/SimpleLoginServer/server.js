// 모듈 가져오기.
const express = require('express');
const handler = require('./requestHandler');

// 모듈 내보내기.
module.exports = {
    start : () => {
        // express 객체 생성.
        const app = express();

        // 미들웨어 설정.
        app.use(express.urlencoded({extended : false})); //body-parser. 안하면 requestHandler.js에 request.body를 쓸 수가 없다.

        // 라우팅 설정.
        app.get('/', handler.sendLoginHtml);
        app.get('/login', handler.sendLoginHtml);
        app.post('/login', handler.checkLogin);

        // 요청 대기.
        app.listen(3000);
        console.log("서버 실행 중...");
    }
}