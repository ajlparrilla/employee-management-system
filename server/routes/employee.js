var express = require('express');
var router = express.Router();
var Administrator = require('../models/administrator')
var Staff = require('../models/staff')
var Employee = require('../models/employee')
var passport = require('passport')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', function (req, res, next){
  addtoDB(req, res);
})

async function addtoDB (req, res){
  var administrator = new Administrator({
    fullname: req.body.fullname,
    position: req.body.position,
    username: req.body.username,
    password: Administrator.hashPassword(req.body.password)
  })

  try{
    doc = administrator.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err)
  }
}

router.post('/login', function (req, res, next){
  passport.authenticate('local-employee', function(err, employee, info) {
    if (err) { return res.status(501).json(err); }
    if (!employee) { return res.status(501).json(info); }
    req.logIn(employee, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message: 'Login success!'})
    });
  })(req, res, next);
})

module.exports = router;
