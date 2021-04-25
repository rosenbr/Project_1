const express = require("express");

const router = express.Router();

const db = require("../models");

// TODO update url's in router.get when views is updated
// New User route
router.get("/new", function(req, res){
    res.render("user/new");
});

// Show User route
router.get("/newUser", function(req, res){
    db.User.findById(req.params.id)
        .exec(function(err, foundUser){
            if(err) return res.send(err);

            const context = {user: founUser};
            return res.render("user/show", context);
        });
});

// Create User route
router.post("/", function(req, res){
    db.User.create(req.body, function(err, createdUser){
        if(err) return res.send(err);

        return res.redirect("/home");
    });
});

module.exports = router;