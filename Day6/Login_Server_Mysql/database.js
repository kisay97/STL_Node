// 모듈 추출.
const mysql = require('mysql');
const fs = require('fs');

// DB 연결 정보 설정.
const client = mysql.createConnection({
    user : 'root',
    password : 'qweasd123',
    database : 'userdb'
});

// DB 연결.
client.connect(function(error){
    if (error) {
        console.log('DB 연결 오류: ' + error);
    }
});

// 로그인(login-sign-in).
function login(res, data) {
    // 쿼리문 작성 - 요청 구문.
    let query = 'select * from userinfo where userid = ? and password = ?';

    // 요청
    client.query(query, [data.userid, data.password], function(error, result){
        if (error) { //쿼리문 실행에 문제가 발생한 경우
            console.log('쿼리 검색 실패: ' + error);
            res.send('쿼리 검색 실패: ' + error);
        } else { //쿼리문 실행이 잘된 경우
            //if (result === undefined)
            if (result.length > 0 ) { // 검색한 결과가 있는 경우.
                console.log('로그인 성공');
                res.send('로그인 성공');
            } else { // 검색 결과가 없는 경우 - id/pw 매치가 안된 경우.
                console.log('로그인 실패');
                res.send('로그인 실패');
            }
        }
    });
}

// 등록(register, sign-up).
function register(res, data) {

    //쿼리문 작성.
    let query = 'select * from userinfo where userid = ?'; // id가 사용중인지 확인.
    client.query(query, data.userid, function(error, result){

        // 검색 결과 확인.
        if (result.length === 0) {
            query = 'insert into userinfo set ?';
            client.query(query, data, function(error){
                if (error) {
                    console.log('사용자 추가 실패: ' + error);
                    res.send('사용자 추가 실패: ' + error);
                } else {
                    console.log('사용자 ' + data.userid + ' 등록 완료');
                    fs.readFile('./registerResult.html', function(error, html) {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html');
                        res.send(html);
                    });
                    // res.send('<META HTTP-EQUIV="refresh" CONTENT="3; url=/login"<br>사용자 ' + data.userid + ' 등록 완료<br>3초후 로그인 페이지로 이동합니다.');
                }
            });
        } else { //id 중복일 때.
            console.log('ID가 사용중입니다.');
            res.send('ID가 사용중입니다.');
        }
    });
};

// 모듈 내보내기.
module.exports = {
    login,
    register
};