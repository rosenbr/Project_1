// * === Const and Require === * //
const express = require("express");
const db = require("./models");
const controllers = require("./controllers");
const app = express();
const PORT = 4000;
const methodOverride = require("method-override");
app.set("view engine", "ejs");
// const { response } = require("express");
const router = express.Router();
const session = require("express-session");
const MongoStore = require("connect-mongo");


// * ===== Middleware ===== * //
app.use(express.urlencoded({ extended: true }));
// json express.json()
app.use(methodOverride("_method"));
app.use(session({
  store: MongoStore.create({mongoUrl: "mongodb://localhost:27017/blogdb"}),
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

// * ===== Serve Images and Public Folders ==== * ///
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

// * === Controllers === * //
app.use("/usersAuth", controllers.usersAuth);
app.use("/recipes", controllers.recipes);
app.use("/comments", controllers.comments);

// * =====  Routes ===== * //
// app.use("/home", express.static("/public"));

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

// 1) HOME ROUTE FOR RECIPES
app.get("/", function (request, response) {
  const context = {
    allRecipes: db.Recipes,
  };
  response.render("home", context);
});

// * ===== Server Bind ==== *//
app.listen(PORT, function () {
	console.log("I'm a little server hear me roar!");
});

// * === Export App === * //
module.exports = app;