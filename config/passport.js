const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcryptjs");
const User = db.users;

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({usernameField: "username"}, 
    (username, password, done) => {
      // match user
      db.Users.findOne({
        where: {
          username: username
        }
      }).then((user) => {
        if(!user) {
          return done(null, false, {message: "Email is not registered"});
        }

        // match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw err;

          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {message: "Password incorrect"})
          }
        });
      }).catch((err) => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // passport.deserializeUser((id, done) => {
  //   db.Users.findOne({
  //     where: {
  //         id: id
  //     }
  //   }).then((err, user) => {
  //     done(err, user);
  //   });
  // });

  passport.deserializeUser(async (id, done) => {
    const user = await db.Users.findOne({
      where: {
        id
      }
    });
    done(null, user);
  });

};