var http = require('http');

var data1 = {url:process.argv[2], data : "",done:false};
var data2 = {url:process.argv[3], data : "",done:false};
var data3 = {url:process.argv[4], data : "",done:false};

function getDataFromUrl(dataset,callback) {
	var error_string = undefined;
	http.get(dataset.url, function(response) {
		response.setEncoding('utf8');
		response.on('data', function(data) {
			dataset.data += data;
		});
		response.on('error', function(data) {
			dataset.data += data;
		});
		response.on('end', function() {
			if (!error_string == undefined) {
				dataset.data += error_string;
			}
			dataset.done = true;
			return callback();
		});
	});
}

function checkDone(){
	try {
		if (data1.done
				&& data2.done && data3.done
				) {
			console.log(data1.data);
			console.log(data2.data);
			console.log(data3.data);			
			return true;
		} else {
			return false;
			console.log("not ok");
		}
		
	} catch (e) {
		console.log("problem " + e);
		return false;
	}
}

getDataFromUrl(data1,checkDone);
getDataFromUrl(data2,checkDone);
getDataFromUrl(data3,checkDone);

// need to sort out fonts
//davids-MacBook-Pro:juggling_async dave$ learnyounode verify program.js 
//
//Your submission results compared to the expected:
//
//────────────────────────────────────────────────────────────────────────────────
//
//1.  ACTUAL:    "He's got a massive bunyip to trent from punchy bities. As dry as a galah where it'll be durry. "
//1.  EXPECTED:  "He's got a massive bunyip to trent from punchy bities. As dry as a galah where it'll be durry. "
//
//2.  ACTUAL:    "Gutful of daks and it'll be pot. He hasn't got a larrikin bloody lets throw a snag. He's got a massive ace! mate you little ripper troppo. "
//2.  EXPECTED:  "Gutful of daks and it'll be pot. He hasn't got a larrikin bloody lets throw a snag. He's got a massive ace! mate you little ripper troppo. "
//
//3.  ACTUAL:    "Trent from punchy joey with as cunning as a sleepout. Lets throw a cockie no dramas as busy as a tucker-bag. As cross as a hottie with we're going stubby. "
//3.  EXPECTED:  "Trent from punchy joey with as cunning as a sleepout. Lets throw a cockie no dramas as busy as a tucker-bag. As cross as a hottie with we're going stubby. "
//
//4.  ACTUAL:    ""
//4.  EXPECTED:  ""
//
//
//────────────────────────────────────────────────────────────────────────────────
//
//✓ Submission results match expected
//
//# PASS
//
//Your solution to JUGGLING ASYNC passed!
//
//Here's the official solution in case you want to compare notes:
//
//────────────────────────────────────────────────────────────────────────────────
//    var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//    
//    function printResults () {
//      for (var i = 0; i < 3; i++)
//        console.log(results[i])
//    }
//    
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err)
//            return console.error(err)
//    
//          results[index] = data.toString()
//          count++
//    
//          if (count == 3)
//            printResults()
//        }))
//      })
//    }
//    
//    for (var i = 0; i < 3; i++)
//      httpGet(i)
//
//────────────────────────────────────────────────────────────────────────────────
//
//You have 11 challenges left.
//Type 'learnyounode' to show the menu.
//

