// 함수
// #1
testFunc(); // 호이스팅. 선언부 위에서도 사용 가능.
function testFunc() { //선언식은 호이스팅이 가능
    console.log('testFunc');
}
testFunc();

// #2
// testFunc2(); //표현식은 호이스팅이 불가능
let testFunc2 = function() {
    console.log('testFunc2');
}
testFunc2();

// #3
let testFunc3 = () => { //화살표 함수(Arrow Function)
    console.log('testFunc3');
}
testFunc3();


function add(a,b){
    return a + b;
}
console.log(add(10,20));

let add2 = (a,b) => a+b; //return이 없어도 가능.
console.log(add2(20,30));