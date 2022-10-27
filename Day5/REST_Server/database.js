// 데이터 베이스 관련 기능 제공.
// 단순 버전 -> 배열에 데이터 저장.

// 데이터 저장용 배열
// -> MySQL.
let storage = [];

// 데이터에서 id 값 부여를 위한 카운트 변수.
let count = 1;

// 데이터 조회 함수.
function get(id) {
    // id 파라미터가 전달 됐을 때.
    if (id) {
        // 변수 가공
        id = typeof(id) === 'string' ? Number(id) : id;

        // 데이터 선택.
        for (const element of storage) { //in은 객체순환, of는 배열순환
            if (element.id === id) return element;
        }
    } else { // id 파라미터가 전달 되지 않았을 때.
        return storage;
    }
}

// 데이터 추가 함수.
function insert(data) {
    // 데이터의 id 값 추가.
    data.id = count++;
    // 배열에 새로운 데이터 추가.
    storage.push(data);
    // 추가한 데이터 반환.
    return data;
}

// 데이터 삭제 함수.
function deleteData(id) {
    // 변수 가공.
    id = typeof(id) === 'string' ? Number(id) : id;

    // 데이터 삭제.
    for (let i = 0; i<storage.length; i++){
        // id 가 같으면 삭제
        if(storage[i].id === id){
            storage.splice(i,1);
            return true;
        }
    }

    // 삭제 실패
    return false;
}

module.exports = {
    get,
    insert,
    delete : deleteData
}