// DB 변수.
let mysqlDB;

// DB 연결 함수.
function connectDB(db) {
    mysqlDB = db;
}

// 루트(/) 요청 처리 함수.
function start(req, res) { 
    res.redirect('/user');
};

// 전체 사용자 정보 조회.
function showTotalUser(req, res) {
    mysqlDB.get(res);
}

// 1명의 사용자 정보 조회.
function showUser(req, res) {
    mysqlDB.get(res, req.params.id);
}

// 사용자 정보 추가.
function insertUser(req, res) {

    // 데이터 생성.
    const data = {
        name : req.body.name,
        region : req.body.region
    };

    // db에 데이터 추가.
    mysqlDB.insert(res, data);
}

// 사용자 정보 수정.
function updateUser(req, res) {

    // 사용자 정보 추출.
    const data = {
        name : req.body.name,
        region : req.body.region,
        id : req.params.id
    };

    console.log('updateUser data: ', data);

    // 사용자 정보 업데이트.
    mysqlDB.update(res, data);
}

// 사용자 정보 삭제.
function removeUser(req, res) {
    mysqlDB.remove(res, req.params.id);
}

// 모듈 내보내기.
module.exports = {
    connectDB,
		start,
    showTotalUser,
    showUser,
    insertUser,
    updateUser,
    removeUser
}