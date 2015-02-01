var mymodule = require('./mymodule.js');

function logResults(err,data){
	if (err) throw err;
//	for ( var i = 0; i < data.length; i++) {		
//	console.log(data[i]);
//	}
//	console.log("in function");
	console.log(data);
}
//console.log("about to call module");
mymodule(process.argv[2],process.argv[3],logResults);
//console.log("called module");