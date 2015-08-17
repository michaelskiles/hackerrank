function processData(input) {
    input = input.split('\n');

    var length = input[0].split(' ')[0],
        testCaseCount = input[0].split(' ')[1],
        laneArray = input[1].split(' ');

    input.splice(0, 2);

    for (var i = 0; i < testCaseCount; i++) {
        var range = input[i].split(' '),
            startingLane = range[0],
            endingLane = parseInt(range[1]) + 1,
            subArray = laneArray.slice(startingLane, endingLane);

        console.log(Math.min.apply(Math, subArray));
    }
}


var fs = require('fs'),
_input = "",
readStream = fs.createReadStream('serviceLane.txt',{encoding: "utf8"});

readStream.on("data", function (input) {
    _input += input;
});

readStream.on("end", function () {
   processData(_input);
});
