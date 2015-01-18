var fs = require('fs');

var string = undefined;

function readTheFile(callback){

	fs.readFile(process.argv[2],function doneReading (err,data){
		if (err) throw err;
		string = data.toString();
		callback();
	});
}

function logResults()
{
	var arrLines = string.split('\n');
	console.log(arrLines.length-1);	
}

readTheFile(logResults);

//
//dgalloway@AUK0231NB /C/Users/dgalloway/JavaScript/NodeJS/LearnYouNode/MyFirstAsyncIO (master)
//$ learnyounode verify program.js
//
//Your submission results compared to the expected:
//
//                 ACTUAL                                  EXPECTED
//
//
//   "9"                                 ==    "9"
//   ""                                  ==    ""
//
//
//
//V Submission results match expected
//V Used asynchronous method: fs.readFile()
//
//# PASS
//
//Your solution to MY FIRST ASYNC I/O! passed!
//
//Here's the official solution in case you want to compare notes:
//
//
//    var fs = require('fs')
//    var file = process.argv[2]
//
//    fs.readFile(file, function (err, contents) {
//      // fs.readFile(file, 'utf8', callback) can also be used
//      var lines = contents.toString().split('\n').length - 1
//      console.log(lines)
//    })
//
//