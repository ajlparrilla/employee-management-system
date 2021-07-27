var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const Administrator = require('./models/administrator');
const Staff = require('./models/staff');

passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
  function(username, password, done) {
    Administrator.findOne({ username: username }, function (err, administrator) {
      if (err) { return done(err); }
      if (!administrator) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!administrator.isValid(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, administrator);
    });
  }
));

passport.serializeUser(function(administrator, done) {
    done(null, administrator._id);
  });
  
  passport.deserializeUser(function(id, done) {
    Administrator.findById(id, function(err, administrator) {
      done(err, administrator);
    });
});

passport.use('local-staff', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
  function(username, password, done) {
    Staff.findOne({ username: username }, function (err, staff) {
      if (err) { return done(err); }
      if (!staff) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!staff.isValid(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, staff);
    });
  }
));

passport.serializeUser(function(staff, done) {
    done(null, staff._id);
  });
  
  passport.deserializeUser(function(id, done) {
    Staff.findById(id, function(err, staff) {
      done(err, staffr);
    });
});

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