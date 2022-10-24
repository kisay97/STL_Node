// 동기 방식
console.log('시작');

// setTimeout은 타이머를 설정하고, 타이머 시간이 지나면, 전달한 함수를 실행.
// setTimeout(function, milliseconds)
setTimeout(function(){
    console.log("테스트");
}, 2000);

console.log("끝");