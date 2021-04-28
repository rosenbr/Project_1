// const { response } = require("express");
const express = require("express");
const { Comments } = require("../models");

const router = express.Router();

const db = require("../models");

/* TODO
    - Create √
    - Read
    - Update
    - Delete
    */

// Index Route
router.get("/indexComments", function(req, res){
  db.Comments.find({}, function(err, foundComments){
    if (err) return res.send(err);

    const context = {Comments: foundComments};
    res.render("comments/indexComments", context);
  });
});

// Show Route
router.get("/showComments/:id", function (req, res) {
  db.Comments.findById(req.params.id, function (err, foundComment) { //
    if (err) return res.send(err);

    const context = { Comments: foundComment };
    res.render("comments/showComments", context);
  });
});


// 3) CREATE ROUTE COMMENTS (Presentational)
router.get("/createComments", function(req, res){
      res.render("comments/createComments");
    });
  
// 3) CREATE ROUTE COMMENTS (Functional)
router.post("/createComments", function (req, res) {
  console.log(req.body);
  db.Comments.create(req.body, function (err) {
    if (err) return res.send(err);
    
    return res.redirect("indexComments");
  });
});

// // Edit Comments Route (presentational)
router.get("/editComments/:id", function(req, res){
  db.Comments.findById(req.params.id, function (err, foundComment) { //
    if (err) return res.send(err);

    const context = { Comments: foundComment };
  res.render("comments/editComments", context);
  });
});

// Update Route (Functional)
router.put("/editComments/:id", function (req, res) {
	db.Comments.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
        body: req.body.body
			},
		},
		{ new: true },
		function (err, updatedComments) {
			if (err) return res.send(err);
			return res.redirect("../indexComments");
		}
	);
});

// Delete Route (Functional)
router.delete("/showComments/:id", function (req, res) {
	db.Comments.findByIdAndDelete(req.params.id, function (err) {
		if (err) return res.send(err);

		return res.redirect("../indexComments");
	});
});

module.exports = router;