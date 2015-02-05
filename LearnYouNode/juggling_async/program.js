var http = require('http');
var url1Data = "";
var url2Data = "";
var url3Data = "";

var url1Done = false;
var url2Done = false;
var url3Done = false;

url1Data = getDataFromUrl(process.argv[2],url1Done);
url2Data = getDataFromUrl(process.argv[3],url2Done);
url3Data = getDataFromUrl(process.argv[4],url3Done);

function logResults() {
	// console.log('logging results');
	console.log(data_string.length); // + error_string.length);
	console.log(data_string); // + error_string);
	if (!error_string === undefined) {
		console.log(error_string);
	}
}

function getDataFromUrl(url,done) {
	var data_string = "";
	var error_string = undefined;
	http.get(url, function(response) {
		response.setEncoding('utf8');
		response.on('data', function(data) {
			data_string += data;
		});
		response.on('error', function(data) {
			error_string += data;
		});
		response.on('end', function() {
			logResults();
		});
	});
}