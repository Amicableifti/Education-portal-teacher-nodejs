var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('course page requested!');
	res.render('student/index');
});

router.get('/viewallstudent', function(req, res){
	userModel.getAll(function(results){
		if(results.length > 0){
			res.render('student/viewallstudent', {userlist: results});
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

