var fs = require('fs');
var path = require('path');

var arrFiltered = undefined;
var extension = '.'+process.argv[3];
// console.log(extension);

function filterThisDirectory(callback){

	fs.readdir(process.argv[2],function doneReading (err,data){
		if (err) throw err;
		arrFiltered = data.filter(function matchesExtension(item){
//			console.log(item);
//			console.log(path.extname(item));
			if(path.extname(item) === extension){				
				return item;
			}
		});
		callback();
	});
}

function logResults()
{
	for ( var i = 0; i < arrFiltered.length; i++) {
		
	console.log(arrFiltered[i]);
	}
}

filterThisDirectory(logResults);

//dgalloway@AUK0231NB /C/Users/dgalloway/JavaScript/NodeJS/LearnYouNode/FilteredLS (master)
//$ learnyounode verify program.js
//
//Your submission results compared to the expected:
//
//                 ACTUAL                                  EXPECTED
//
//
//   "CHANGELOG.md"                      ==    "CHANGELOG.md"
//   "LICENCE.md"                        ==    "LICENCE.md"
//   "README.md"                         ==    "README.md"
//   ""                                  ==    ""
//
//
//
//V Submission results match expected
//V Used asynchronous method: fs.readdir()
//
//# PASS
//
//Your solution to FILTERED LS passed!
//
//Here's the official solution in case you want to compare notes:
//
//
//    var fs = require('fs')
//    var path = require('path')
//
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })
