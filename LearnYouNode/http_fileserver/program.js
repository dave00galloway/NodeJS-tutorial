var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'content-type' : 'text/plain'
	});
	var file = fs.createReadStream(process.argv[3]);
	file.pipe(res);
});
server.listen(process.argv[2]);

//suprised my solution was allowed since I didn't include a head!
//    var http = require('http')
//    var fs = require('fs')
//    
//    var server = http.createServer(function (req, res) {
//      res.writeHead(200, { 'content-type': 'text/plain' })
//    
//      fs.createReadStream(process.argv[3]).pipe(res)
//    })
//    
//    server.listen(Number(process.argv[2]))    