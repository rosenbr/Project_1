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
router.get("/indexRecipes/:id", function (req, res){
  const query = req.query.search  
      ? {
         $or: [
           {name: { $regex: req.query.search, $options: "i" }},
           {ingredients: { $regex: req.query.search, $options: "i" }}
          ]
        }
      : {
        };
        console.log(query);
  db.Recipes.find(query, function (err,  foundRecipe){
    if (err) return res.send(err);

    const context = { allRecipes: foundRecipe };
    res.render("recipes/indexRecipes", context);
  });
});


module.exports = router;