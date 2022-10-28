// 모듈 추출.
const mysql = require('mysql');

// 연결 정보 설정.
const client = mysql.createConnection({
    user : 'root',
    password : 'qweasd123',
    database : 'restdb'
});

// 데이터베이스 연결.
client.connect();

// 정보 요청 함수.
function get(res, id) {
    console.log('DB Get Requested');

    if (id) {

        // 변수 가공.
        id = (typeof id === 'string') ? Number(id) : id;

        // 쿼리문.
        const query = 'select * from userinfo where id=?';

        // 쿼리 실행.
        client.query(query , id, function(error, result, fields){
            if (error) {
                console.log('쿼리 실패 select * from userinfo where id=' + id);
                res.send('쿼리 실패 select * from userinfo where id=' + id);
            } else {
                console.log('결과: ' + JSON.stringify(result));
                res.send(result);
            }
        });

    } else {

        // 쿼리문 작성.
        const query = 'select * from userinfo';

        // 쿼리 실행.
        client.query(query, function(error, result, fields){
            if (error) {
                console.log('쿼리 실패 select * from userinfo');
                res.send('쿼리 실패 select * from userinfo');
            } else {
                console.log('결과: ' + result);
                res.send(result);
            }
        });
    }
};

// 데이터 추가.
function insert(res, data) {

    // 쿼리문.
    const query = 'insert into userinfo set ?';
    client.query(query, data, function(error, result, fields){
        if (error) {
            console.log('DB 추가 오류: ' + error);
            res.send('DB 추가 오류: ' + error);
        } else {
            console.log('DB 추가 완료');
            console.log(result);
            res.send('DB 추가 완료, ' + result);
        }
    });
};

// 데이터 삭제.
function remove(res, id) {
    if (id) {
        console.log('DB Delete Requested');

        id = (typeof id === 'string') ? Number(id) : id;
        const query = 'delete from userinfo where id=' + id;
        client.query(query, function(error, result){
            if (error) {
                console.log('DB 삭제 오류: ' + error);
                res.send('DB 삭제 오류: ' + error);
            } else {
                console.log('DB 삭제 결과: ' + result);
                res.send('DB 삭제 결과: ' + result);
            }
        });

    } else {
        console.log('id가 입력되지 않았습니다.');
    }
};

function update(res, data) {
    if (data.id) {
        data.id = (typeof data.id === 'string') ? Number(data.id) : data.id;
        const query = 'update userinfo set name=?, region=? where id=?';
        client.query(query, [data.name, data.region, data.id], function(error, result){
            if (error) {
                console.log('DB 갱신 오류: ' + error);
                res.send('DB 갱신 오류: ' + error);
            } else {
                console.log('DB 갱신 결과: ');
                console.log(result);
                res.redirect('/user');
            }
        });
    }
};

// 모듈 내보내기.
module.exports = {
	get,
	insert,
	update,
	remove
}