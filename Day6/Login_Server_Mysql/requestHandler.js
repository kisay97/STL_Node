// 모듈 추가.
const fs = require('fs');

// DB 변수.
let mysqlDB;

// DB 연결 함수.
function connectDB(database) {
    mysqlDB = database;
};

// 루트(/) 경로로 요청왔을 때 호출될 함수 -> 리디렉션.
function start(req, res) {
    res.redirect('/register');
}

// 사용자 정보 등록하는 웹폼(webform)을 보여주는 함수.
function showRegisterForm(req, res) { 
    fs.readFile('./register.html', function(error, html){
        res.type('text/html');
        res.send(html);
    });
};

// 로그인 양식 보여주는 함수.
function showLoginForm(req, res) {
    fs.readFile('./login.html', function(error, html){
        res.type('text/html');
        res.send(html);
    });
};

// 사용자 정보 등록.
function register(req, res) {

    // 추가할 데이터 설정.
    const data = {
        userid : req.body.id,
        nickname : req.body.nickname,
        password : req.body.password,
    };

    // DB에 데이터 추가 요청.
    mysqlDB.register(res, data);
}

// 로그인
function login(req, res) {

    // 로그인 확인할 데이터 설정.
    const data = {
        userid : req.body.id,
        password : req.body.password
    };

    // 로그인 확인 요청.
    mysqlDB.login(res, data);
}

// 모듈 내보내기.
module.exports = {
    connectDB,
    start,
    showRegisterForm,
    showLoginForm,
    register,
    login
};