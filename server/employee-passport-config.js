var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const Administrator = require('./models/administrator');
const Employee = require('./models/employee');

passport.use('local-employee', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
function(username, password, done) {
  Employee.findOne({ username: username }, function (err, employee) {
    if (err) { return done(err); }
    if (!employee) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!employee.isValid(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, employee);
  });
}
));

passport.serializeUser(function(employee, done) {
  done(null, employee._id);
});

passport.deserializeUser(function(id, done) {
  Employee.findById(id, function(err, employee) {
    done(err, employee);
  });
});