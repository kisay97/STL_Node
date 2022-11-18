const fs = require('fs');
const ejs = require('ejs');

let mysqlDB;

function connectDB(database) {
    mysqlDB = database;
};

function start(request, response) {
    response.redirect('/register');
};

function showRegisterForm(requestuest, response) {

    fs.readFile('./register.html', function(error, html){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.send(html);
    });
};

function showLoginForm(request, response) {
    fs.readFile('./login.html', function(error, html) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.send(html);
    });
};

function register(request, response) {

    const data = {
        userid : request.body.userid,
        password : request.body.password,
        nickname : request.body.nickname
    }

    mysqlDB.register(response, data);
};

function login(request, response) {

    const data = {
        userid : request.body.userid,
        password : request.body.password
    }

    mysqlDB.login(response, data);
};

function showboard(request, response) {
    
    fs.readFile('./board.html', 'utf-8', function(error, html) {

        mysqlDB.showboard(request, response, ejs, html);
    });
};

function saveContent(request, response) {
    
    const data = {
        userid : request.cookies.userid,
        title : request.body.title,
        content : request.body.content
    };

    mysqlDB.saveContent(request, response, data);
};

function showContent(request, response) {
    fs.readFile('./showContent.html', 'utf-8', function(error, html) {
        mysqlDB.showContent(request, response, ejs, html);
    });
};

function showWritingForm(request, response) {
    fs.readFile('./writeForm.html', function(error, html) {
        if (error) {
            response.send('Error: ' + error);
        } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.send(html);
        }
    });
};

function updateContent(request, response) {

    console.log('updateContent');
    console.log(request.body);

    const data = {
        id : request.params.id,
        content : request.body.content
    };

    mysqlDB.updateContent(request, response, data);
};

function deleteContent(request, response) {
    mysqlDB.deleteContent(request, response);
};

// 모듈 내보내기.
module.exports = {
    connectDB,
    start,
    showRegisterForm,
    showLoginForm,
    register,
    login,
    showboard,
    showContent,
    showWritingForm,
    saveContent,
    updateContent,
    deleteContent,
};