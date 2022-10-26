// 모듈 추출.
const fs = require('fs');
const loginInfo = require('./loginInfo');

module.exports = {
    sendLoginHtml : (request, response) => {
        // index.html을 읽어서 응답.
        fs.readFile(__dirname + '/index.html', (err,data)=>{
            if(err){
                response.send('error : ' + err);
            } else {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                response.send(data);
            }
        })
    },
    checkLogin : (request, response) => {
        // 값 단순비교.
        if (request.body.userid === loginInfo.userid
                && request.body.password === loginInfo.password) {
            response.send('<h2>로그인 성공</h2>');
        } else {
            response.send('<h2>로그인 실패</h2>');
        }
    }
}