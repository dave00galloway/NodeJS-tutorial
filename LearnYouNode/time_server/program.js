function padZero(string,length){
	while(string.length < length){
		string = '0' + string;
	}
	return string;
}

    var net = require('net')
    var server = net.createServer(function (socket) {
      // socket handling logic
    	var date = new Date();
    	//console.log(date);
    	var string = date.getFullYear() + '-' +
    				padZero((date.getMonth() +1) .toString(), 2) + '-' + // another learnyounode bug?
    				padZero(date.getDate().toString(),2) +' ' +
    				padZero(date.getHours().toString(),2) + ':' +
    				padZero(date.getMinutes().toString(),2);
    	socket.end(string) + "\r\n";
    })
    server.listen(process.argv[2]);
    
//    var net = require('net')
//    
//    function zeroFill(i) {
//      return (i < 10 ? '0' : '') + i
//    }
//    
//    function now () {
//      var d = new Date()
//      return d.getFullYear() + '-'
//        + zeroFill(d.getMonth() + 1) + '-'
//        + zeroFill(d.getDate()) + ' '
//        + zeroFill(d.getHours()) + ':'
//        + zeroFill(d.getMinutes())
//    }
//    
//    var server = net.createServer(function (socket) {
//      socket.end(now() + '\n')
//    })
//    
//    server.listen(Number(process.argv[2]))    