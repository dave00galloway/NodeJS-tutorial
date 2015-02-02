module.exports = function(dir_path,ext,callback)
{
	var fs = require('fs');
    var path = require('path');
    var arrFiltered = undefined;

    fs.readdir(dir_path, function (err, list) {
    	if(err)
    		return callback(err);
    	arrFiltered = list.filter(function (item){
			if(path.extname(item) === '.' + ext){				
				return item;
			}
		});
    	return callback(null,arrFiltered);
    });	
};

