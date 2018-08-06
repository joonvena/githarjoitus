var express = require('express');
var router = express.Router();
var users = require('../userservice');

/* This is a dev version of the software */

router.route('/')
.get(function(req, res, next) {
  res.redirect('/users');
})
.post(function(req, res) {
	res.json(users.adduser(req, res));
});

router.route('/:id')
.get(function(req, res) {
	res.json(users.getuserbyid(req, res));
})
.delete(function (req, res) {
	res.json(users.deleteuser(req, res));
})
.put(function (req, res) {
	res.json(users.updateuser(req, res));
});

/* This is a dev version of the software */

router.route('/users/:id/info')
.get(function(req, res) {
	res.json(users.adduser(req, res));
});


module.exports = router;
