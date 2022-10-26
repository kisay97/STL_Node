// 모듈 가져오기.
const fs = require('fs');

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
        fs.rename(request.files.image.path, `./uploads/${request.files.image.name}`, (error) => {
            if (error) {
                response.send('Error ocurred: ' + error);
            } else {
                savedFileName = request.files.image.name;
                response.send('<img src=/show />');
            }
        });
    },
    show : (request, response) => {
        console.log('show called');
        if (savedFileName != '') {
            fs.readFile(__dirname + '/uploads/' + savedFileName, (error, image) => {
                if (error) {
                    response.send('Error ocurred: ' + error);
                } else {
                    savedFileName = '';
                    response.send(image);
                }
            })
        }
    }
}