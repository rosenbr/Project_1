const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/login", function (req, res){
    res.send("login page");
    // res.render("/login");
});

// REGISTER ROUTES

// LOG IN ROUTES

module.exports = router;