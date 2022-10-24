// http 모듈 가저오기. http는 기본 모듈임.
const http = require('http');

// 변수
const hostname = '127.0.0.1'; // IPv4 / IPv6.
const port = 3000; // 포트(->서버 프로그램 구분을 위한) 번호.

// 리스너(응답해주는거, Listener) 함수 선언.
function onRequest(request, response) {
    console.log("요청이 들어옴: "); //대충 로그. 두번 들어오는데 파비콘때문에 요청이 들어옴이 두번 찍힘
    console.log(request.headers['user-agent']);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain'); //패킷 = 데이터. 약속. 웹서버는 http라는 약속을 따른다. 
    response.end('Hello World\n');
}

// 서버 객체 생성.
const server = http.createServer(onRequest); //onRequest는 콜백함수.

server.listen(port, hostname, () => {
    // let testVar = `${hostname}`; //``에는 ${변수명}으로 변수 내용을 문자열로 찍어버릴 수 있다.
    console.log(`Server running at http://${hostname}:${port}/`);
});
