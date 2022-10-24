// NodeJs의 모듈 시스템.

// 모듈로 쓸 함수 정의
function addNumber(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

// 모듈 추출.
module.exports = { //module은 NodeJs 시스템의 모듈이라는 변수임.
    addNumber : addNumber,
    substract : substract
}