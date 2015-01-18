var sum = 0;

for ( var int = 2; int < process.argv.length; int++) {
	sum += Number(process.argv[int]);
}
console.log(sum);