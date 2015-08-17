function processData(input) {

} 

var fs = require('fs'),
_input = "",
readStream = fs.createReadStream('input.txt',{encoding: "utf8"});

readStream.on("data", function (input) {
    _input += input;
});

readStream.on("end", function () {
   processData(_input);
});
