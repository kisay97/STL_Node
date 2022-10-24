// test 함수는 함수를 인자로 받아 호출시킴.
function test(callback){
    // 전달 받은 callback이 함수인지 확인 후 실행.
    if(typeof(callback) === "function") { //test("testFunction"); 같은 코드를 실행할 때 에러를 내지 않기 위함
        callback();
    }
}

// print 함수는 단순히 문자를 출력.
const print = function() {
    console.log("Hello");
}

// test 함수를 호출하면서, print 함수를 인자로 전달.
test(print);
//test("testFunction"); // 에러 발생(문자열 "testFunction"은 함수가 아님)

test(()=>{console.log("hi!")});