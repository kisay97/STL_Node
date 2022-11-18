var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', function(req, res) {
    res.redirect('/setcookie');
});

app.get('/setcookie', function(req, res) {
    res.cookie('userid', 'RonnieJ');

    res.redirect('/getcookie');
});

app.get('/getcookie', function(req, res) {
    res.send(req.cookies);
});

var port = process.env.port || 8000;

http.createServer(app).listen(port);
console.log('서버 실행중');