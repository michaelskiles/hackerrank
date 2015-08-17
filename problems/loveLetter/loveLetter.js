function processData(input) {
    var testCases = input.split('\n'),
        testCaseCount = testCases.shift();

    for (var i = 0; i < testCaseCount; i++) {
        console.log(testCases[i]);
        generatePalindrome(testCases[i]);
    }
}

function generatePalindrome(input) {

    var operationCount = 0,
        reverseInput = input.reverse();
    while (input !== reverseInput) {

        var char = input.highestLetter();
        input = input.replace(char, String.fromCharCode(char.charCodeAt(0) - 1));
    }
    console.log(operationCount);

}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

String.prototype.highestLetter = function () {
    return this.split('').sort().pop();
};

var fs = require('fs'),
    _input = "",
    readStream = fs.createReadStream('loveLetter.txt', { encoding: "utf8" });

readStream.on("data", function (input) {
    _input += input;
});

readStream.on("end", function () {
    processData(_input);
});
