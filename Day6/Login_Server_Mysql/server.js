// 모듈 가져오기.
const express = require('express');

// 라우팅 설정 함수.
function setRouter(app, handle) {
    for (let info of handle) {
        switch (info.method) {
            case 'get': app.get(info.path, info.callback); break;
            case 'post': app.post(info.path, info.callback); break;
            case 'put': app.put(info.path, info.callback); break;
            case 'delete': app.delete(info.path, info.callback); break;
            default: break;
        }
    }
}

// 서버 시작 함수.
function start(handle) {

    // express 객체 생성.
    const app = express();

    // 미들웨어 설정 - bodyparser.
    app.use(express.urlencoded({extended:true}));

    // 라우팅 설정.
    setRouter(app, handle);

    // 요청 대기.
    app.listen(3000);
    console.log('서버 실행 중');
}

// 모듈 내보내기.
module.exports = {
    start
}