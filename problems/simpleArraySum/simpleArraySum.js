function processData(input) {
    var inputArr = input.split('\n'),
        dataCount = parseInt(inputArr[0]),
        data = inputArr[1].split(' '),
        sum = 0;

    for (var i = 0; i < dataCount; i++) {
        sum += parseInt(data[i]);
    }

    console.log(sum);
}

var fs = require('fs'),
    _input = "",
    readStream = fs.createReadStream('input.txt', { encoding: "utf8" });

readStream.on("data", function (input) {
    _input += input;
});

readStream.on("end", function () {
    processData(_input);
});
