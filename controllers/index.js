const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const passport = require("passport");

const db = require("../models");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/sign-up", function (req, res) {
    res.render("sign-up");
});
router.get("/post", function (req, res) {
    res.render("post");
});
// router.get("/profile", function (req, res) {
//     db.Users.findOne({
//         where: {
//             id: req.params.id
//         },
//         include:  {
//             model: db.Posts,
//             include: [db.Comments, db.Likes]
//         }
//     }).then(function(dbAuthor) {
//         console.log(dbAuthor);
//         res.render("profile", dbAuthor);
//     });
    
// });

router.get("/profile", (req, res) => {
    res.render("profile");
});

// Sign Up route
router.post("/users/signup", (req, res) => {
    
    const {
        signUpEmail,
        signUpFirstName,
        signUpLastName,
        signUpUsername,
        signUpPassword,
        confirmPassword,
        signUpCountry
    } = req.body;

    let errors = [];

    // check required fields have an entry
    if(!signUpEmail || !signUpFirstName || !signUpLastName || !signUpUsername || !signUpPassword || !confirmPassword || !signUpCountry) {
        errors.push({msg: "Please fill in all fields"});
    }

    // check passwords match
    if(signUpPassword !== confirmPassword) {
        errors.push({msg: "Passwords do not match"});
    }

    // check password length
    if(signUpPassword.length < 8) {
        errors.push({msg: "Password must be at least 8 characters"})
    }

    // if there is an error, re-render the page with the errors displayed
    if(errors.length > 0) {
        res.render("sign-up", {
            errors
        })
    } else {
        // check if email already exists in the database
        db.Users.findOne({
            where: {
                email: signUpEmail
            }
        }).then((user) => {
            if(user) {
                errors.push({msg: "There is already an account with this email address"});
                console.log("email already in use");
                res.render("sign-up", {
                    errors
                })
                return;
            }

            // check if username already exists in the database
            db.Users.findOne({
                where: {
                    username: signUpUsername
                }
            }).then((user) => {
                if(user) {
                    errors.push({msg: "This username is already taken, please try another"});
                    console.log("username already in use");
                    res.render("sign-up", {
                        errors
                    })
                } else {
                    // all validations successful, create the user & redirect to the login page
                    const hashedPassword = bcrypt.hashSync(signUpPassword, 10);
                    db.Users.create({
                        email: signUpEmail,
                        username: signUpUsername,
                        password: hashedPassword,
                        firstName: signUpFirstName,
                        lastName: signUpLastName,
                        country: signUpCountry
                    }).then(function () {
                        req.flash("success_msg", "You are now registered, please log in")
                        res.redirect("/login");
                    })
                }
            })
        })
    }

});

// router.post("/api/users/login", async function (req, res) {
//     const checkUserExist = await db.Users.findOne({
//         where: {
//             username: req.body.username
//         }
//     });
//     if (bcrypt.compareSync(req.body.password, checkUserExist.password)){
//         console.log(`${checkUserExist.username} is now logged in !`)
//     }

// })

// Login route
router.post("/users/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/profile",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
});

module.exports = router;