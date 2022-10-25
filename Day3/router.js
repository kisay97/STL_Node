var fs = require('fs');

// 전달 받은 경로를 확인하고, 처리에 필요한 함수를 간접 실행해주는 함수.
function route(pathname, handle, response) {
    console.log(pathname+' 경로로 요청됨.');
    
    // 경로 값 확인해서 함수 실행.
    if (typeof(handle[pathname]) === 'function') {
        handle[pathname](response);
    } else { // 함수를 못 찾은 경우에는 오류 출력.
        console.log('404 오류. 페이지 검색 실패');

        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        fs.readFile('./404Html.html',function(err,data){
            if(err){
                response.end('404 not found');
            } else {
                response.end(data);
            }
        });
    }
}

module.exports = {
    route // == route : route
}