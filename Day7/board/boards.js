// 모듈 추출.
const fs = require('fs');

function showBoard(req, res) {
    fs.readFile('./writeForm.html', function(error, html) {
        res.type('text/html');
        res.send(html);
    });
};

module.exports = {
    showBoard
};