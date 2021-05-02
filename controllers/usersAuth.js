const express = require("express");

const router = express.Router();

const db = require("../models");

const bcrypt = require("bcryptjs");

// REGISTER ROUTES get/post
router.get("/register", function(req, res){
    res.render("usersAuth/register")
});

router.post("/register", async function(req, res){
    try {
    const foundUser = await db.User.findOne({email: req.body.email});
      if (foundUser){
        return res.redirect("/login");
    }
    
    const salt = await bcrypt.genSalt(420);
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
    res.render("usersAuth/login");
});

router.post("/login", async function(req, res){
    try {
        const foundUser = await db.User.findOne({email: req.body.email});
        
        if (!foundUser) return res.redirect("userAuth/register");
        
        const matches = await bcrypt.compare(req.body.password, foundUser.password);
        
        if (!matches) return res.send("Password Incorrect");
        
        req.session.currentUser = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email
        }
        
        return res.redirect("/");
    
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;