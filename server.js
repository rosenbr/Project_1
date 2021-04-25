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

// 1) HOME ROUTE
app.get("/", function (request, response) {
  const context = {
    allRecipes: db.Recipes,
  };
  response.render("home", context);
});

// 2) SHOW ROUTE
app.use("/:index", function (request, response) {
  const context = {
    Recipes: db.Recipes[request.params.index],
  };
  response.render("recipes/showRecipes", context);
});

// * ===== Server Bind ==== *//
app.listen(PORT, function () {
	console.log("I'm a little server hear me roar!");
});

// * === Export App === * //
module.exports = app;