const LocalStrategy = require("passport-local").Strategy;
const bcryptjs = require("bcryptjs");

// GET route

function initialise(passport, getUserByUsername) {
  const authenticateUser = (username, password, done) => {
    const user = getUserByUsername(username);
    if (user == null) {
      return done(null, false, {message: "username not found"})
    }

    try {
      if (bcryptjs.compareSync(password, userPasswordFromDatabase)) {
        return done(null, user);
      } else {
        return done(null, false, {message: "password incorrect"});
      }
    } catch (err) {
      return done(err);
    }
  }

  passport.use(new LocalStrategy({
    usernameField: "Username",
    passwordField: "Password"
  }),
  authenticateUser)
  passport.serializeUser((user, done) => {

  });
  passport.deserializeUser((id, done) => {

  });
};

module.exports = initialise