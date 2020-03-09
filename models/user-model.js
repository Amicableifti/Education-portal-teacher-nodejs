var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from user where id=?";
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
	getByUname: function(uname, callback){
		var sql = "select * from user where username=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
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
	getprofile:function(callback){
		var sql = "select * from teacher";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
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
    getfewstudent:function(callback){
		var sql = "select * from student where cname=? and section=?";
		db.getResult(sql, [course.cname, course.section], function(results){
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
	insert: function(user, callback){
		var sql = "insert into user values(?,?,?,?)";
		db.execute(sql, [null, user.username, user.password, user.type], function(status){
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