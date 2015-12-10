var express = require('express');
var router = express.Router();
var firebase = require('firebase');

router.get('/signup', function(req, res){
	res.render('auth/signup.ejs')
});

router.get('/login', function(req, res){
	res.render('auth/login.ejs')
});

module.exports = router;