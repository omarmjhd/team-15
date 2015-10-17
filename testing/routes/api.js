var express = require('express');
var router = express.Router();


var mongoose = require( 'mongoose' );
var Post     = mongoose.model( 'Post' );
var Comment  = mongoose.model( 'Comment');
var DoctorClinic = mongoose.model('DoctorClinic', DoctorClinic);
var Clinic = mongoose.model('Clinic', Clinic);
var Doctor = mongoose.model('Doctor', Doctor);
var User = mongoose.model('User', User);

router.post('/newPost', function(req, res, next) {
	var newPost = req.body;
	new Post({
		user : newPost.user,  
		content : newPost.content,  
		points : newPost.points
	}).save(function (err, users, count){
		res.send(200);
	});
});

router.post('/newComment', function(req, res, next) {
	var newComment = req.body;
	new Comment({
		user : newComment.user,
		content : newComment.content,
		points : newComment.points
	}).save(function(err, users, count) {
			res.send(200);
		});
});

router.post('/newClinic', function(req, res, next) {
	var newClinic = req.body;
	new Clinic({
		addr : newClinic.addr,
		specs : newClinic.specs
	}).save(function(err, users, count) {
			res.send(200);
		});
});

router.post('/newDoctor', function(req, res, next) {
	var newDoctor = req.body;
	new Doctor({
		name : newDoctor.name,
		licenseNumber : newDoctor.licenseNumber,
		location : newDoctor.location,
		admin : newDoctor.admin
	}).save(function(err, users, count) {
			res.send(200);
		});
});

router.post('/newUser', function(req, res, next) {
	var newUser = req.body;
	new User({
		name : newUser.name,
		location : newUser.location,
		gender : newUser.gender,
		admin : newUser.admin
	}).save(function(err, users, count) {
			res.send(200);
		});
});


router.get('/getPosts', function (req, res, next) {
	Post.find({}, function (err, docs) {
		console.log(err);
	    res.json(docs);
	});
});





module.exports = router;