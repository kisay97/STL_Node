// 모듈 가져오기
const http = require('http');
const express = require('express');
const fs = require('fs');

// 서버 시작함수.
const start = () => {
    
    // 객체 생성.
    const app = express();

    app.use((req,res) => {

        //  GET 요청을 통해 전달된 파라미터 파싱(읽기).
        console.log(req.query.age);

        fs.readFile('./index.html',(err,data)=>{
            if(err){
                res.status(500).send('<h1>500 Internal Server Error</h1>'+
                '<p>'+(err.toString())+'</p>')
            }
            else {
                res.send(data.toString());
            }
        });
    });
    
    // 서버 생성 및 요청 대기
    http.createServer(app).listen(3000);
    console.log("server started");

}

// 모듈 내보내기.
module.exports = {
    start
}