// * === Const and Require === * //
const express = require("express");
const app = express();
const db = require("./models");
const PORT = 4000;
// const controllers = require("./controllers");
// const methodOverride = require("method-override");
app.set("view engine", "ejs");


// * ===== Middleware ===== * //
// app.use(express.urlencoded({ extended: true }));
// json express.json()
// app.use(methodOverride("_method"));

// app.use(express.static(__dirname + "/public"));

// * === Controllers === * //
// app.use("/", controllers.);

// * =====  Routes ===== * //
app.use("/home", express.static("/public"));

// look for ?_method=TYPE change the TYPE to what you need

/* =====  Controllers ===== */
// 
// CHANGE///////////////////////////////////
// app.use("/fruits", controllers.fruits);
// app.use("/recipes", controllers.recipes);
// app.use("/comments", controllers.comments);
// app.use("/users", controllers.users);
/* =====  Routes ===== */

/* 
  Requests Methods
    GET - get data
    POST - create data -> body data
    PUT - update data -> body data and target
    PATCH - update data of a specific value -> body data and target
    DELETE - delete/destroy -> target
*/


// CRUD 
// 1) presentational
// 2) show
 // * === RECIPE ROUTES === * //

// 1) HOME ROUTE FOR RECIPES
app.get("/", function (request, response) {
  const context = {
    allRecipes: db.Recipes,
  };
  response.render("home", context);
});

 // 1) HOME ROUTE FOR COMMENTS
app.get("/indexComments", function (request, response) {
  const context = {
    allComments: db.Comments,
  };
  response.render("comments/indexComments", context)
});

// // 2) SHOW ROUTE
// app.get("/:index", function (request, response) {
//   const context = {
//     Recipes: db.Recipes[request.params.index],
//   };
//   response.render("recipes/showRecipes", context);
// });

// // 2) SHOW ROUTE
// app.use("/showRecipe/:index", function (request, response) {
//   const context = {
//     Recipes: db.Recipes[request.params.index],
//   };
//   response.render("recipes/showRecipes", context);
// });
// app.get("/showComments/:index", function(req, res){
// //   db.Comments.find({}, function (err, allComments){
// //       if (err) return res.send(err);

// //       const context = {comments: allComments};
// //       return res.render("/", context);
// //   });
// // });
// const context = {
//   Comments: db.Comments[request.params.index],
// };
// response.render("comments/showComments", context);
// });

// * ===== Server Bind ==== *//
app.listen(PORT, function () {
	console.log("I'm a little server hear me roar!");
});

// * === Export App === * //
module.exports = app;