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

  // Index Route
/* router.get("/showRecipes", function(req, res){
  db.Comments.find({}, function(err, foundComments){
    if (err) return res.send(err);

    const context = {Comments: foundComments};
    res.render("recipes/showRecipes", context);
  });
});

// Show Route
router.get("/showComments/:_id", function (req, res) {
  db.Comments.findById(req.params.id, function (err, foundComment) { //
    if (err) return res.send(err);

    const context = { Comments: foundComment };
    res.render("comments/showComments", context);
  });
});


// 3) CREATE ROUTE COMMENTS (Presentational)
router.get("/createComments", function(request, response){
      response.render("comments/createComments");
    });
  
  // // 4) CREATE ROUTE COMMENTS (Functional)
  // router.post("/createComments", function(request, response){
    //     let commentBody = request.body;
    //     db.Comments.push(commentBody);
    //     response.redirect("indexComments");
    //   }); 

router.post("/createComments", function (req, res) {
  console.log(req.body);
  db.Comments.create(req.body, function (err) {
    if (err) return res.send(err);
    
    return res.redirect("indexComments");
  });
}); */

module.exports = router;