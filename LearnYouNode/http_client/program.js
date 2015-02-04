var http = require('http');

function logResults(response)
{
	response.on("data",function(data){
		//console.log(data.setEncoding("utf8"));
		console.log(data.toString());
	});
}

var response = http.get(process.argv[2],logResults);

//var http = require('http')
//
//http.get(process.argv[2], function (response) {
//  response.setEncoding('utf8')
//  response.on('data', console.log)
//  response.on('error', console.error)
//})
