const express = require("express");

const router = express.Router();

const db = require("../models");

// Show Route
router.get("/showRecipes/:id", function (req, res) {
  db.Recipes.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundRecipes){
      if (err) return res.send(err);

      const context = {Recipes: foundRecipes};
    res.render("recipes/showRecipes", context);
  });
});

  // Edit
// router.put("/editComments/:id", function (req, res) {
// 	db.Comments.findByIdAndUpdate(
// 		req.params.id,
// 		{
// 			$set: {
//         body: req.body.body
// 			},
// 		},
// 		{ new: true },
// 		function (err, updatedComments) {
// 			if (err) return res.send(err);
// 			return res.redirect("../indexComments");
// 		}
// 	);
// });

  // Delete use .pull instead of .push
// router.delete("/showRecipes/:id", function (req, res) {
// 	db.Comments.findByIdAndDelete(req.params.id, function (err, deletedComment) {
// 		if (err) return res.send(err);

// db.Recipes.findById(deletedComment.recipe)

// 		return res.redirect("../indexComments");
// 	});
// });
  
module.exports = router;