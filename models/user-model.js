var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from user";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getallresult: function(id, callback){
		var sql = "select * from result";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getBySid: function(id, callback){
		var sql = "select * from student where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
    
	getByTUname: function(uname, callback){
		var sql = "select * from user where username=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	//for login
	validate: function(user, callback){
		var sql = "select * from user where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	//teacher all information
	getallcourse:function(callback){
		var sql = "select * from course";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	getByCid: function(cid, callback){
		var sql = "select * from course where cid=?";
		db.getResult(sql, [cid], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
    getallstudent:function(callback){
		var sql = "select * from student";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},

	getAll:function(callback){
		var sql = "select * from user";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	updateprofile: function(user, callback){
		var sql = "update user set name=?,password=?,email=?,type=? where id=?";
		db.execute(sql, [user.name,user.password,user.email,user.type,user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updatepassword: function(user, callback){
		var sql = "update user set password=? where id=?";
		db.execute(sql, [user.password,user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "update student set  result=? where id=?";
		db.execute(sql, [user.result, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updatenotice: function(user, callback){
		var sql = "update course set  notice=? where cid=?";
		db.execute(sql, [user.notice, user.cid], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}

	//updatemark: function(user, callback){
	//	var sql = "update user set no=?,id=?,name=?,cname=?,section=?,result=?,creditcomplete=?,cgpa=? where id=?";
	//	db.execute(sql, [, user.password, user.type, user.id], function(status){
	//		if(status){
		//		callback(true);
	//		}else{
	//			callback(false);
	//		}
	//	});
	//}
	
	
}