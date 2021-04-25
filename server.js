/* ===== External Modules ===== */
// bring in OUTSIDE code
const express = require("express");
const app = express();
const PORT = 4000;
// const methodOverride = require("method-override");

app.set("view engine", "ejs");

/* ===== Internal Modules ===== */
// bring in code from another file
// const controllers = require("./controllers");

const app = express();
const PORT = 4000;
app.set("view engine", "ejs");
/* ===== Middleware ===== */
// handle body data
app.use(express.urlencoded({ extended: true }));
// json express.json()
// app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

// look for ?_method=TYPE change the TYPE to what you need

/* =====  Controllers ===== */
// 
// CHANGE///////////////////////////////////
// app.use("/fruits", controllers.fruits);

/* =====  Routes ===== */

/* 
  Requests Methods
    GET - get data
    POST - create data -> body data
    PUT - update data -> body data and target
    PATCH - update data of a specific value -> body data and target
    DELETE - delete/destroy -> target
*/

// HOME ROUTE

// .get is used or GET method request
// .get("url location", callback function)
// .get("/", function(request, response){})
app.get("/", function (request, response) {
	
	response.render("home");
});



// 	// to render an ejs file
// 	// .render("file", data)
// 	response.render("home");
// });

/* ===== Server Bind ==== */
// Bind our server to a port

// .listen(number of port, function to run when successful)
app.listen(PORT, function () {
	console.log("I'm a little server hear me roar!");
});
