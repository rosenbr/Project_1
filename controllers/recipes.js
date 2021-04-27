const express = require("express");

const router = express.Router();

const db = require("../models");

// Show Route
router.get("/showRecipes/:index", function (request, response) {
    const context = {
      Recipes: db.Recipes[request.params.index],
      index: request.params.index,
    };
    response.render("recipes/showRecipes", context);
    // response.send(context);
  });

module.exports = router;