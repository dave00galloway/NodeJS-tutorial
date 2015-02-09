/**
 * New node file
 */

function padZero(string,length){
	while(string.length < length){
		string = '0' + string;
	}
}

    var net = require('net')
    var server = net.createServer(function (socket) {
      // socket handling logic
    	var date = new Date();
    	var string = date.getFullYear() + '-' +
    				padZero(date.getMonth(), 2) + '-' +
    				padZero(date.getDate(),2) +'-' +
    				padZero(date.getHours(),2) + '-' +
    				padZero(date.getMinutes(),2);
    	socket.end(string) + "\r\n";
    })
    server.listen(process.argv[2]);