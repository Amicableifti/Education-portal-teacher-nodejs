var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('course page requested!');
	userModel.getallstudent(function(results){
		if(results.length > 0){
			console.log(results);
			res.render('student/index', { userlist: results});
		}else{
			res.send('invalid username/password');
		}
	});
})

router.get('/viewallstudent', function(req, res){
	userModel.getallstudent(function(results){
		if(results.length > 0){
			console.log(results);
			res.render('student/viewallstudent', { userlist: results});
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

