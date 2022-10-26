// 모듈 가져오기.
const fs = require('fs');

// 임시 저장용 변수
let savedFilename = '';

// 모듈 내보내기.
module.exports = {
    start : (request, response) => {
        console.log('start called');
        fs.readFile(__dirname + '/index.html', (err,data)=>{
            if(err){
                response.status(500).send('<h1>500 Internal Server Error</h1>'+
                '<p>'+(err.toString())+'</p>')
            }
            else {
                response.send(data.toString());
            }
        });
    },
    favicon : (request, response) => {
        console.log('favicon called');
        fs.readFile(__dirname + '/logo.png', (error, icon) => {
            if (error) {
                response.send('Error occured: ' + error);
            } else {
                response.send(icon);
            }
        });
    },
    upload : (request, response) => {
        console.log('upload called');

        // 업로드된 파일의 경로 변경.
        const dir = `${__dirname}/uploads`;
        // 업로드 폴더 있는지 확인
        if (!fs.existsSync(dir)) {
            console.log("폴더 없음");
            // 폴더 없으면 만들기
            fs.promises.mkdir(dir, {recursive: true});
        }
        const filepath = `${dir}/${request.files.image.name}`;
        fs.rename(request.files.image.path, filepath, (error) => {
            if (error) {
                response.send('Error ocurred: ' + error);
            } else {
                // 저장한 파일 이름 임시로 저장.
                savedFilename = request.files.image.name;
                response.send('<img src=/show />');
            }
        });
    },
    show : (request, response) => {
        console.log('show called');
        
        // savedFilename 변수에 저장된 값이 빈 문자열이 아닌지 확인.
        if (savedFilename != '') {
            // 불러올 파일 경로 값
            const filepath = `${__dirname}/uploads/${savedFilename}`;
            // 파일 읽기
            fs.readFile(filepath, (error, image) => {
                // 오류 처리.
                if (error) {
                    response.send('Error ocurred: ' + error);
                } else {
                    // 데이터 읽어온 후 파일 이름 초기화.
                    savedFilename = '';
                    // 응답 처리.
                    response.send(image);
                }
            })
        }
    }
}