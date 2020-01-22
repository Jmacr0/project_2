const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render("index");
});


module.exports = router;