// * === Const and Require === * //
const express = require("express");
const db = require("./models");
const controllers = require("./controllers");
const app = express();
const PORT = 4000;
const methodOverride = require("method-override");
app.set("view engine", "ejs");
require("dotenv").config();
// const { response } = require("express");
const router = express.Router();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcryptjs");


// * ===== Middleware ===== * //
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session({
  store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
  secret: "super secret cookie key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));
app.use(function(req, res, next){
  console.log(`${req.method} - ${req.url}`);
  next();
});
app.use(function(req,res,next){
  app.locals.user = req.session.currentUser;
  next();
});
const authRequired = function(req, res, next){
  if (req.session.currentUser){
    return next();
  }
  return res.redirect("/login");
};

// * ===== Serve Images and Public Folders ==== * ///
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

// * === Controllers === * //
app.use("/", controllers.usersAuth);
app.use("/recipes", controllers.recipes);
app.use("/comments", controllers.comments);

// 1) HOME ROUTE FOR RECIPES
app.get("/", function (req, res) {
    const query = req.query.search  
        ? {
           $or: [
             {name: { $regex: req.query.search, $options: "i" }},
             {ingredients: { $regex: req.query.search, $options: "i" }}
            ]
          }
        : {
          };
  let header = "Trending Recipes"
    if (req.query.search){
      header = "Search Results";
    }
  db.Recipes.find(query, function(err, foundRecipes){
    if (err) return res.send(err);

    const context = {allRecipes: foundRecipes, header};
    res.render("home", context);
  });
});

// * ===== Server Bind ==== *//
app.listen(PORT, function () {
	console.log("I'm a little server hear me roar!");
});

// * === Export App === * //
module.exports = app;