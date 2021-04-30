const express = require("express");

const router = express.Router();

const db = require("../models");

// REGISTER ROUTES get/post
router.get("/register", function(req, res){
    res.render("usersAuth/register")
});

router.post("/register", async function(req, res){
    try {
    const foundUser = await db.User.findOne({email: req.body.email}); //check out or operator
      if (foundUser){
        return res.redirect("/login");
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    const newUser = await db.User.create(req.body);
    
    return res.redirect("usersAuth/login");
    
    } catch (err){
        console.log(err);
        res.send(err);
    }
});

// LOG IN ROUTES get/post
router.get("/login", function(req, res){
    res.render("usersAuth/login")
});

router.post("/login", function(req, res){
    res.redirect("/")
});

module.exports = router;