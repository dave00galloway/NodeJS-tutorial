var fs = require('fs');

//var buffer = fs.readFileSync('testData.txt');

var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var arrLines = string.split('\n');

console.log(arrLines.length-1);