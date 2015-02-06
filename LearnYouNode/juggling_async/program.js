var http = require('http');
//http.options.protocol = 'http';
var url1Data = "";
var url2Data = "";
var url3Data = "";

var url1Done = false;
var url2Done = false;
var url3Done = false;

console.log(process.argv[2] );

url1Data = getDataFromUrl(process.argv[2], url1Done);
//url2Data = getDataFromUrl(process.argv[3], url2Done);
//url3Data = getDataFromUrl(process.argv[4], url3Done);

//while (!url1Done && !url2Done && !url3Done) {
//	console.log("waiting");
//	
//}

console.log(url1Data);
console.log(process.argv[2] ) ;//+ ' ' +
console.log(url1Done);
//console.log(url2Data);
//console.log(url3Data);

function getDataFromUrl(url) {
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
			url1Done = true;
			if (!error_string == undefined) {
				console.log("err string = :- " + error_string);
				data_string += error_string;
			}
			console.log("data = -" + data_string);
			url1Data = data_string;
			return  data_string;
			//logResults();
			
		});
	});
}

// need to sort out fonts
