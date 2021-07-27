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

// router.post('/register', function (req, res, next){
//   addtoDB(req, res);
// })

// async function addtoDB (req, res){
//   var administrator = new Administrator({
//     fullname: req.body.fullname,
//     position: req.body.position,
//     username: req.body.username,
//     password: Administrator.hashPassword(req.body.password)
//   })

//   try{
//     doc = administrator.save();
//     return res.status(201).json(doc);
//   }
//   catch(err){
//     return res.status(501).json(err)
//   }
// }

router.post('/login', function (req, res, next){
  passport.authenticate('local-staff', function(err, administrator, info) {
    if (err) { return res.status(501).json(err); }
    if (!administrator) { return res.status(501).json(info); }
    req.logIn(administrator, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message: 'Login success!'})
    });
  })(req, res, next);
})

router.get('/page', (req, res) => {
  Employee.find((err,docs) => {
    if (!err) {res.send(docs)}
    else { console.log('Error in retrieving employees: ' + JSON.stringify(err, undefined, 2))}
  });
})

// Add new staff
router.post('/page', function (req, res, next){
  addtoDB(req, res);
})

async function addtoDB (req, res){
  var employee = new Employee({
    fullname: req.body.fullname,
    position: req.body.position,
    username: req.body.username,
    password: Employee.hashPassword(req.body.password)
  })

  try{
    doc = employee.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err)
  }
}

router.get('/page/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given ID : ${req.params.id}`);

  Employee.findById(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error retrieving employee data :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/page/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

      var employee = ({
        fullname: req.body.fullname,
        position: req.body.position,
        username: req.body.username,
        password: req.body.password
      })

  Employee.findByIdAndUpdate(req.params.id, { $set: employee }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in employee update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/page/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in employee delete :' + JSON.stringify(err, undefined, 2)); }
  });
});

module.exports = router;
