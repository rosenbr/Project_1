const express = require("express");

const router = express.Router();

const db = require("../models");

/* TODO
    - Create
    - Read
    - Update
    - Delete
*/
// TODO update url pathways when they are ready

// Comments Index Route
// NOTE Do we need an index of comments from the User?
router.get("/", function(req, res){
    db.Comments.find({}, function (err, allComments){
        if (err) return res.send(err);

        const context = {comments: allComments};
        return res.render("/", context);
    });
});

// New Comment Route
router.get("/", function(req, res){
    res.render("/");
});

// Show Comments Route
// NOTE popultaing the article page with comments?
router.get("/", function(req,res){
    db.Comments.findById(req.params.id)
        .populate("comments")
        .exec(function (err, foundComments){
            if(err) return res.send(err);

            const context = {comments: foundComments};
            return res.render("/", context);
        });
});


// Create Comment Route
router.post("/", function(req, res){
    db.Comments.findById(req.params.id, function(err, foundComments){
        if(err) return res.send(err);

        return res.redirect("/");
    });
});

// Edit Comments Route (presentational)
router.get("/", function(req, res){
    db.Comments.findById(req.params.id, function(err, foundComments){
        if(err) return res.send(err);

        const context = {comments: foundComments};
        return res.render("/", context);
    });
});

// Update Comments Route
router.put("/", function(req, res){
    db.Comments.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        {new: true},
        function(err, updateComments){
            if(err) return res.send(err);
            return res.redirect("/");
        }
    );
});

// Delete Comments Route


module.exports = router;