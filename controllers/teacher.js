var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
			console.log('course page requested!');
	userModel.getallcourse(function(results){
		console.log(results);
		if(results.length > 0){
			res.render('teacher/index', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
});

router.get('/viewallstudent', function(req, res){
	userModel.getByCid(function(results){
		if(results.length > 0){
			res.render('student/viewallstudent', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

router.get('/profile', function(req, res){
	userModel.getprofile(function(results){
		console.log(results);
		if(results.length > 0){
			res.render('teacher/profile', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/editprofile', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('teacher/editprofile', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/changepassword', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('teacher/changepassword', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/upload', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('teacher/upload', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})
router.get('/result', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('student/result', {userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

module.exports = router;

