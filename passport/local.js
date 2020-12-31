const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user");

const localStrategy = new LocalStrategy(async (username, password, done) => {
   await User.findOne({ username }, function(err, user){
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: "Incorrect username." });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
  });
  
});

module.exports = localStrategy;
