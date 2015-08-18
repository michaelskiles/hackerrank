function processData(input) {
    var testCases = input.split('\n'),
        testCaseCount = testCases.shift();

    for (var i = 0; i < testCaseCount; i++) {
        outputMinimumOpertations(testCases[i]);
    }
}

function outputMinimumOpertations(word) {

    var operationCount = 0,
        reverseWord = word.reverse();

    for (var i = 0, j = word.length; i < j; i++) {
        if (word.charCodeAt(i) > reverseWord.charCodeAt(i)) {
            operationCount += word.charCodeAt(i) - reverseWord.charCodeAt(i)
        }
    }

    console.log(operationCount);
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

var fs = require('fs'),
    _input = "",
    readStream = fs.createReadStream('input.txt', { encoding: "utf8" });

readStream.on("data", function (input) {
    _input += input;
});

readStream.on("end", function () {
    processData(_input);
});
