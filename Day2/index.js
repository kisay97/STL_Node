// 서버의 시작 지점을 index로 많이 사용.

// 모듈 가져오기.
const server = require('./server');
const router = require('./router');
const requestHandler = require('./requestHandler');

// 경로와 실행할 함수 정보를 연결.
// 해시테이블 활용.
// 경로를 키(key)-실행할 함수를 값(Value)로 연결.
const handle = {
    '/' : requestHandler.start,
    '/start' : requestHandler.start,
    '/upload' : requestHandler.upload
}

// 서버 시작.
server.start(router.route, handle); // Dependency Injection (의존성 주사(입)).
// 스크립트 간의 직접적인 의존도는 낮추는 게 좋다. -> 디커플링(Decoupling).