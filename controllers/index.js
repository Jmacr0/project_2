const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/login", function (req, res) {
    res.render("login");
})

router.get("/sign-up", function (req, res) {
    res.render("sign-up");
})

router.post("/api/users", function (req, res) {
    console.log(req.body)
    db.Users.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,        
        country: req.body.country
    }).then(function(newUser){
        res.json(newUser);
    })
})

module.exports = router;