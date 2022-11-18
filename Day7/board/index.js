// 모듈 추출.
const server = require('./server');
const requestHandler = require('./requestHandler');
const database = require('./database');

// 핸들러 생성자.
function HandleCreator(method, path, callback) {
    this.method = method;
    this.path = path;
    this.callback = callback;
}

// 핸들러 정보 설정.
const handle = [
    new HandleCreator('get', '/', requestHandler.start),
    new HandleCreator('get', '/register', requestHandler.showRegisterForm),
    new HandleCreator('get', '/login', requestHandler.showLoginForm),
    new HandleCreator('get', '/board', requestHandler.showboard),
    new HandleCreator('get', '/board/writing', requestHandler.showWritingForm),
    // new HandleCreator('get', '/board/update/:id', requestHandler.updateContent),
    new HandleCreator('get', '/board/delete/:id', requestHandler.deleteContent),
    new HandleCreator('get', '/board/:id', requestHandler.showContent),
    
    new HandleCreator('post', '/register', requestHandler.register),
    new HandleCreator('post', '/login', requestHandler.login),
    new HandleCreator('post', '/board', requestHandler.saveContent),
    new HandleCreator('post', '/board/update/:id', requestHandler.updateContent),
];

// DB 연결.
requestHandler.connectDB(database);

// 서버 시작.
server.start(handle);