function processData(input) {
    var inputArr = input.split('\n'),
        arrLength = parseInt(inputArr.shift()),
        firstDiagonalSum = 0,
        secondDiagonalSum = 0;

    for (var i = 0, j = arrLength; i < arrLength; i++ , j--) {
        firstDiagonalSum += parseInt(inputArr[i].split(' ')[i]);
        secondDiagonalSum += parseInt(inputArr[j - 1].split(' ')[i]);
    }

    console.log(Math.abs(secondDiagonalSum - firstDiagonalSum));

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
