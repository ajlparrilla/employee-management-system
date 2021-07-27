var express = require('express');
var router = express.Router();
var Administrator = require('../models/administrator')
var Staff = require('../models/staff')
var Employee = require('../models/employee')
var passport = require('passport')
var ObjectId = require('mongoose').Types.ObjectId;

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/login', function (req, res, next){
  passport.authenticate('local', function(err, administrator, info) {
    if (err) { return res.status(501).json(err); }
    if (!administrator) { return res.status(501).json(info); }
    req.logIn(administrator, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message: 'Login success!'})
    });
  })(req, res, next);
})

// View all staff
router.get('/page', (req, res) => {
  Staff.find((err,docs) => {
    if (!err) {res.send(docs)}
    else { console.log('Error in retrieving employees: ' + JSON.stringify(err, undefined, 2))}
  });
})

// Add new staff
router.post('/page', function (req, res, next){
  addtoDB(req, res);
})

async function addtoDB (req, res){
  var staff = new Staff({
    fullname: req.body.fullname,
    position: req.body.position,
    username: req.body.username,
    password: Staff.hashPassword(req.body.password)
  })

  try{
    doc = staff.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err)
  }
}

router.get('/page/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given ID : ${req.params.id}`);

  Staff.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error retriving staff data :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/page/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var staff = ({
        fullname: req.body.fullname,
        position: req.body.position,
        username: req.body.username,
        password: req.body.password
      })

  Staff.findByIdAndUpdate(req.params.id, { $set: staff }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in staff update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/page/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  Staff.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in staff delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;
