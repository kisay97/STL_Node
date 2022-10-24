// http 모듈 가저오기. http는 기본 모듈임.
const http = require('http');
// 요청 경로 추출 패키지
const url = require('url');

// 서비스 시작 함수.
function start(route, handle) {
    
    const server = http.createServer((req, res)=>{
        // 경로 추출.
        const pathname = url.parse(req.url).pathname;
        console.log('pathname: ' + pathname); //root~param전까지(경로만)
        console.log('req.url: ' + req.url); //root~param까지(경로+파라미터)
        console.log('query: ' + url.parse(req.url).query); //param만

        // 라우팅 처리 함수를 실행하면서, 경로 전달.
        route(pathname, handle, res);
    });

    server.listen(3000, () => {
        console.log("server started");
    });

}

// 모듈 내보내기.
module.exports = {
    start : start
}