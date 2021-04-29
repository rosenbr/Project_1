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

// Index Route
router.get("/indexRecipes", function (req, res){
  const query = req.query.name
      ? {
          name: { $regex: req.query.name, $options: "i" },
        }
      : {
        };
  db.Recipes.find(query, function (err,  foundRecipe){
    if (err) return res.send(err);

    const context = { allRecipes: foundRecipe };
    res.render("recipes/indexRecipes", context);
  });
});

module.exports = router;