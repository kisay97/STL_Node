var fs = require('fs');
var formidable = require('formidable');

// 요청에 따른 응답 함수를 가지는 스크립트.
// 요청 경로마다 다른 응답 처리를 위한 함수가 작성되는 스크립트.
function start(response) {
    console.log('request handler start 함수 호출됨');

    // 응답.
    fs.readFile('./index.html',function(err,data){
        if(err){
            response.statusCode = 500;
            response.setHeader('Content-Type', 'text/html');
            response.end('<h1>500 Internal Server Error</h1>'+
                '<p>'+(err.toString())+'</p>'
            );
        } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        }
    });
}

function upload(response, request) {
    console.log('request handler upload 함수 호출됨');

    // parse a file upload
    const form = formidable({multiples: true});

    // 파싱(해석).
    form.parse(request,(err,fields,files)=>{
        // 오류가 있으면 오류 출력.
        if(err){
            response.statusCode = 500;
            response.setHeader('Content-Type', 'text/html');
            response.end('<h1>500 Internal Server Error</h1>'+
                '<p>'+(err.toString())+'</p>'
            );
        } else {
            // 업로드된 이미지의 경로 출력.
            console.log(files);

            // 업로드한 임시 파일을 특정 경로로 옮기기
            fs.rename(files.upload_image.filepath, './uploads/img.png', (err)=>{
                if(err){
                    response.statusCode = 500;
                    response.setHeader('Content-Type', 'text/html');
                    response.end('<h1>500 Internal Server Error</h1>'+
                        '<p>'+(err.toString())+'</p>'
                    );
                } else {
                    // 응답.
                    response.statusCode = 200;
                    response.setHeader('Content-Type', 'text/html');
                    // response.end('<body><h1>Upload</h1></body>')
                    //response.end(files.upload_image._writeStream.path);
                    // 요청을 /show 경로로 처리.
                    response.end('<img src="/show" />');
                }
            });
        }
    })
}

function show(response){
    fs.readFile('./uploads/img.png', (err,data)=>{
        if(err){
            console.log('error occured: ' + err);
        } else {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'image/png');
            response.end(data);
        }
    });
}

function favicon(response){
    fs.readFile('./logo.png', function(err,img){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'image/png');
        response.end(img);
    });
}

// 모듈 내보내기.
module.exports = {
    start,
    upload,
    favicon,
    show
}