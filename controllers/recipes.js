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


module.exports = router;