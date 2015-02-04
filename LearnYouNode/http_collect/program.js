var http = require('http');
var data_string = "";
var error_string = undefined;

function logResults(){
	//console.log('logging results');
	console.log(data_string.length ) ; // + error_string.length);
	console.log(data_string) ; // + error_string);
	if (!error_string === undefined) {
		console.log(error_string);
	}
}

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', function(data){data_string += data;});
  response.on('error', function(data){error_string += data;});
  response.on('end',function(){logResults();});
});
 
//var http = require('http')
//var bl = require('bl')
//
//http.get(process.argv[2], function (response) {
//  response.pipe(bl(function (err, data) {
//    if (err)
//      return console.error(err)
//    data = data.toString()
//    console.log(data.length)
//    console.log(data)
//  }))  
//})
//
