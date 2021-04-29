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
// router.get("/indexComments", function(req, res){
//   db.Comments.find({}, function(err, foundComments){
//     if (err) return res.send(err);

//     const context = {Comments: foundComments};
    // res.render("comments/indexComments", context);
//   });
// });

// Show Route
router.get("/showComments/:id", function (req, res) {
  db.Comments.findById(req.params.id, function (err, foundComment) { //
    if (err) return res.send(err);

    const context = { Comments: foundComment };
    res.render("recipes/showRecipes", context);
  });
});


// // 3) CREATE ROUTE COMMENTS (Presentational)
// router.get("/createComments", function(req, res){
//       res.render("recipes/showRecipes");
//     });
  
//3) CREATE ROUTE COMMENTS (Functional)
router.post("/createComments/:id", function (req, res) {
  db.Comments.create(req.body, function (err, createdComments) {
    if (err) return res.send(err);

      db.Recipes.findById(req.params.id).exec(function (err, foundRecipes) {
			  if (err) return res.send(err);

		  foundRecipes.comments.push(createdComments);
		  foundRecipes.save();
    
      return res.redirect(`/recipes/showRecipes/${req.params.id}#comments`);
    });
  });
});

// // Update Route (Functional)
router.put("/showComments/:id/:recipeId", function (req, res) {
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
			return res.redirect(`/recipes/showRecipes/${req.params.recipeId}#comments`);
		}
	);
});

// // Delete Route (Functional)
router.delete("/showComments/:id/:recipeId", function (req, res) {
	db.Comments.findByIdAndDelete(req.params.id, function (err, deletedComment) {
		if (err) return res.send(err);

    return res.redirect(`/recipes/showRecipes/${req.params.recipeId}#comments`);
	});
});

module.exports = router;