/**
 * New node file
 */
var fs = require('fs');
//console.log(process.argv[0] + '0');
//console.log(process.argv[1]+ '1') ;
//console.log(process.argv[2]+ '2');
//console.log(process.argv[3]+ '3');
//fs.createReadStream(process.argv[2]).pipe(process.stdout);


fs.createReadStream('data.txt').pipe(process.stdout);