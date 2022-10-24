// 요청에 따른 응답 함수를 가지는 스크립트.
// 요청 경로마다 다른 응답 처리를 위한 함수가 작성되는 스크립트.
function start(response) {
    console.log('request handler start 함수 호출됨');

    // 응답.
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<body><h1>Hello Start!</h1></body>')
}

function upload(response) {
    console.log('request handler upload 함수 호출됨');
    
    // 응답.
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<body><h1>Upload</h1></body>')
}

// 모듈 내보내기.
module.exports = {
    start,
    upload
}