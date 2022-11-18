// 모듈 추출.
const mysql = require('mysql');

// DB 연결 정보 설정.
const client = mysql.createConnection({
    user : 'root',
    password : 'qweasd123',
    database : 'userdb'
});

// DB 연결.
client.connect(function(error){
    if (error) {
        console.log('DB Connection Error: ' + error);
    }
});

function login(response, data) {
    const query = 'SELECT * FROM userinfo WHERE userid=? AND password=?';
    client.query(query, [data.userid, data.password], function(error, result, fields) {
        if (error) {
            console.log('쿼리 검색 실패: ' + error);
            
        } else {
            if (result.length > 0) {
                console.log('로그인 성공');
                response.cookie('userid', data.userid);
                response.redirect('/board/writing');
                //res.send('로그인 성공');
            } else {
                response.send('로그인 실패: ' + error);
            }
        }
    });
}

function register(response, data) {
    // id가 사용 중인지 확인.
    let query = 'SELECT * FROM userinfo WHERE userid=?'
    client.query(query, data.userid, function(error, result, fields) {

        if (result.length == 0) {
            query = 'INSERT INTO userinfo set ?';
            client.query(query, data, function(error) {
                if (error) {
                    console.log('사용자 추가 실패: ' + error);
                    response.send('사용자 추가 실패: ' + error);
                } else {
                    console.log('사용자 ' + data.userid + ' 등록 완료.');
                    response.redirect('/login');
                }
            });
        } else {
            response.send('ID가 사용중입니다.');
        }
    });
}

function saveContent(req, response, data) {

    const query = 'insert into board set ?';
    client.query(query, data, function(error) {
        if (error) {
            console.log('글 저장 오류: ' + error);
            response.send('글 저장 오류: ' + error);
        } else {
            console.log('저장 성공: ');
            console.log(data);
            //response.send('저장 성공: ' + data);
            response.redirect('/board');
        }
    });
}

function showboard(req, response, ejs, html) {
    const query = 'select * from board';
    client.query(query, function(error, results) {
        if (error) {
            console.log('글 조회 오류: ' + error);
            response.send('글 조회 오류: ' + error);
        } else {
            if (results.length > 0) {
                console.log('글 조회 성공');
                response.send(ejs.render(html, { data : results }));
            }
        }
    });
}

function showContent(request, response, ejs, html) {
    const query = 'select * from board where id=?';
    client.query(query, request.params.id, function(error, results) {
        if (error) {
            console.log('글 ' + request.params.id + ' 조회 실패: ' + error);
            response.send('글 ' + request.params.id + ' 조회 실패: ' + error);
        } else {
            if (results.length > 0) {
                console.log('글 ' + request.params.id + ' 조회 성공');
                response.send(ejs.render(html, { data : results[0] }));
            }
        }
    });
}

function deleteContent(request, response) {
    console.log("database.deleteContent called");
    const query = 'delete from board where id=?';
    console.log(`query : ${query}`);
    client.query(query, request.params.id, function(error, results) {
        console.log("deleteContent Callback Called");
        if (error) {
            console.log('글 ' + request.params.id + ' 삭제 실패: ' + error);
            response.send('글 ' + request.params.id + ' 삭제 실패: ' + error);
        } else {
            if (results.length > 0) {
                console.log('글 ' + request.params.id + ' 삭제 성공(실제 삭제됨)');
                response.redirect('/board');
            } else {
                console.log('글 ' + request.params.id + ' 삭제 성공(이미 삭제한걸 삭제하려함)');
                response.redirect('/board');
            }
        }
    });
}

function updateContent(request, response, data) {
    //const query = 'update board set content=? where id=?';
    const query = 'update userdb.board set content=' + data.content  + ' where id=' + data.id;
    console.log('updateContent');
    console.log(query);
    client.query(query, function(error, results) {
        if (error) {
            console.log('글 ' + data.id + ' 갱신 실패: ' + error);
            response.send('글 ' + data.id + ' 갱신 실패: ' + error);
        } else {
            if (results.length > 0) {
                console.log('글 ' + data.id + ' 갱신 성공');
                response.redirect('/board/' + data.id);
            }
        }
    });
}

// 모듈 내보내기.
module.exports = {
    login,
    register,
    saveContent,
    showContent,
    showboard,
    deleteContent,
    updateContent
};