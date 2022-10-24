console.log('Hello World!');
console.log("Hello World!");
console.log(`Hello World!`);

// 자바스크립트는 모듈링이 안된다.
// 그런데 NodeJS는 모듈이 가능함. Export - require.
// CPP는 h / cpp 해서 인클루드. dll 만들수도 있음.


// ctrl + alt + arrow (여러줄 수정)
// 변수.
// JS-Javascript / TS-Type Script
var number = "abc";
var age = 30;

// if (age == 30) {
//     var test = 30;
// }
// test = 50; // if 안에 있는 test랑 동일함.
// console.log(test);

// if (age == 30) {
//     var test = 30;
// }
// var test = 50;
// console.log(test);

// if (age == 30) {
//     var test = 30;
// }
// console.log(test); // 스코프 밖에서도 접근 가능함

// let / const  상수 만드는 키워드
// let은 변수 선언, const는 상수 만드는 거
// if (age == 30) {
//     let test = 30;
// }
// console.log(test); // let으로는 에러남.

// if (age == 30) {
//     const test = 30;
//     test = 50; // 재할당 불가능
//     console.log(test);
// }

// 변수 선언 베스트
// - 일단은 const로 선언하고, 변경이 필요하면 let으로 바꾼다.
// 스코프
// C/C++은 {}로 잡는데, 자바스크립트는 함수 단위로 잡는다.
// 따라서 if 안에서 선언한 변수는 밖에서도 쓸 수 있음.



// let numberA = 0.1;
// let numberB = 0.2;
// let numberC = 0.3;
// if (numberA+numberB == numberC) { //팁 : 자바스크립트는 {의 시작을 같은 줄에 둬야한다. 자바스크립트 런타임에 따라 다음줄에 {를 두면 에러 날수도 있음.
//     console.log('같음');
// }
// else {
//     console.log('다름');
// }

// if ( (numberA*10+numberB*10) == numberC*10) { //팁 : *10 해서 정수로 바꿔서 하면 잘됨
//     console.log('같음');
// }
// else {
//     console.log('다름');
// }

// if (1 == '1') { // 번외 : '1'은 캐릭터가 아님. JS는 문자열만 있음.
//     console.log("같음");
// } else {
//     console.log("다름");
// }
// if (1 === '1') { 
//     console.log("같음");
// } else {
//     console.log("다름");
// }
// if (1 !== '1') { 
//     console.log("true");
// } else {
//     console.log("false");
// }


// Array
let array = [1,2,3,4,5];
// arrayStyle은 위 array와 동일함.
let arrayStyle = {
    '0' : 1,
    '1' : 2,
    '2' : 3,
    '3' : 4,
    '4' : 5,
}
console.log(array[1], array[3]);
let array2 = [1, 'test', function testFunc(){}, 500]; //됨.

// Object 객체.
// -> Key / Value의 쌍으로 이루어진 데이터임.
let object1 = {
    name : 'ronniej',
    age : 38,
}
// 위는 아래와 동일함.
let object2 = {
    'name' : 'ronniej',
    'age' : 38,
}

console.log(object1, object2);
console.log(object1['name'], object1.age); //.이든 []든 가능

let object3 = {
    'name' : 'ronniej',
    'age' : 38,
    test : function(){
        console.log("test function is called");
    },
}
object3.test();
object3['test']();


// 타입을 인식시키는 typeof
// 괄호로 해서 쓸 수도 있고, 띄어쓰기로 쓸 수도 있음.
console.log(typeof(1), typeof 'test');