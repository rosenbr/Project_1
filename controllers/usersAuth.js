const express = require("express");

const router = express.Router();

const db = require("../models");

// REGISTER ROUTES get/post
router.get("/register", function(req, res){
    res.render("usersAuth/register")
});

router.post("/register", function(req, res){
    db.User.create(req.body, function (err) {
        if (err) return res.send(err);
        
        return res.redirect("/login");
      });
});

// LOG IN ROUTES get/post
router.get("/login", function(req, res){
    res.render("usersAuth/login")
});

router.post("/login", function(req, res){
    res.redirect("/")
});

module.exports = router;