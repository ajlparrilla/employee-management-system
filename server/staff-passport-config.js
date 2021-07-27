var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const Administrator = require('./models/administrator');
const Staff = require('./models/staff');

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