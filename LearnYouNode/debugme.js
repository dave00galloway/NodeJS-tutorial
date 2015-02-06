/**
 * New node file
 * here's the output
davids-MacBook-Pro:LearnYouNode dave$ node --debug-brk /usr/local/lib/node_modules/learnyounode/learnyounode.js run debugme.js
debugger listening on port 5858
23
davids-MacBook-Pro:LearnYouNode dave$ node /usr/local/lib/node_modules/learnyounode/learnyounode.js run debugme.js
23
so, the simple script you provided does get called, but I can only step through the learnyounode code, not the debugme.js code
any suggestions?
 */
var a = '2';
var b = '3';
debugger;
console.log(a + b);