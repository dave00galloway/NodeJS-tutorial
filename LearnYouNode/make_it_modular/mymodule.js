module.exports = function(dir_path,ext,callback)
{
	var fs = require('fs');
    var path = require('path');

    //console.log(dir_path);
    //console.log(ext);

    fs.readdir(dir_path, function (err, list) {
    	if(err)
    		return callback(err);
      list.forEach(function (file) {
		//	console.log(file);
		//	console.log(path.extname(file));    	  
        if (path.extname(file) === '.' + ext)
        	//console.log("about to call callback");
          return callback(null,file);
      });
    });	
};

