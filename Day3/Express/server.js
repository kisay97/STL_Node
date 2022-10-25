// 모듈 가져오기
const http = require('http');
const express = require('express');
const fs = require('fs');

// 서버 시작함수.
const start = (req,res) => {
    
    // 객체 생성.
    const app = express();

    app.use((req,res) => {

        //  GET 요청을 통해 전달된 파라미터 파싱(읽기).
        // console.log(req.param('name')); //Deprecated
        console.log(req.query.age);

        // res.send('Hello Express Server');
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                res.status(500).send('<h1>500 Internal Server Error</h1>'+
                '<p>'+(err.toString())+'</p>')
            }
            else {
                // res.type('.html');
                // res.status(200);
                // res.send(data);
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