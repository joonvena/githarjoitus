var express = require('express');
var router = express.Router();
var users = require('../userservice');


router.route('/')
.get(function(req, res, next) {
  res.json(users.users());
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


module.exports = router;
