function processData(input) {
    var inputArr = input.split('\n'),
        intCount = parseInt(inputArr[0]),
        intArr = inputArr[1].split(' '),
        positiveIntCount = 0,
        negativeIntCount = 0,
        zeroIntCount = 0;

    for (var i = 0; i < intCount; i++) {
        var currentInt = parseInt(intArr[i]);

        switch (true) {
            case currentInt < 0:
                negativeIntCount++;
                break;
            case currentInt > 0:
                positiveIntCount++;
                break;
            default:
                zeroIntCount++;
                break;
        }
    }

    console.log((positiveIntCount / intCount).toFixed(3));
    console.log((negativeIntCount / intCount).toFixed(3));
    console.log((zeroIntCount / intCount).toFixed(3));
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
