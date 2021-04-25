// const express = require("express");

// const router = express.Router();

<<<<<<< HEAD
// module.exports = router;
=======
const db = require("../models");

// TODO update url's in router.get when views is updated
// New User route
router.get("/", function(req, res){
    res.render("/");
});

// Show User route
router.get("/", function(req, res){
    db.User.findById(req.params.id)
        .exec(function(err, foundUser){
            if(err) return res.send(err);

            const context = {user: founUser};
            return res.render("/", context);
        });
});

// Create User route
router.post("/", function(req, res){
    db.User.create(req.body, function(err, createdUser){
        if(err) return res.send(err);

        return res.redirect("/");
    });
});

module.exports = router;
>>>>>>> c8afd0dcc94ad2ba5c0c61a561d8d53c1e0b6ca8
