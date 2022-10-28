// 모듈 가져오기
const server = require('./server');
const requestHandler = require('./requestHandler');
const database = require('./database');

// 라우팅 정보 객체 생성 함수.
function CreateHandle(method, path, callback) {
    this.method = method;
    this.path = path;
    this.callback = callback;
}

// 라우팅 연결 정보 객체 생성.
const handle = [
    new CreateHandle('get', '/', requestHandler.start),
    new CreateHandle('get', '/user', requestHandler.showTotalUser),
    new CreateHandle('get', '/user/:id', requestHandler.showUser),
    new CreateHandle('post', '/user', requestHandler.insertUser),
    new CreateHandle('put', '/user/:id', requestHandler.updateUser),
    new CreateHandle('delete', '/user/:id', requestHandler.removeUser)
];

// DB 연결 - 의존성 주입
requestHandler.connectDB(database);

// 서버 시작.
server.serverStart(handle);