const express = require("express");

const router = express.Router();

const db = require("../models");

// Index Route
router.get("/recipes/indexRecipes/:id", async function (req, res) {
	
  try {
    const query = req.query.name
      ? {
          name: { $regex: req.query.name, $options: "i" },
          user: req.session.currentUser.id,
        }
      : {
          user: req.session.currentUser.id,
        };
    // const query = {name: { $regex: req.query.name, $options: "i"} };

    const allRecipes = await db.Recipes.find(query);
    const context = { Recipes: allRecipes };

    return res.render("/recipes/indexRecipes/:id", context);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

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