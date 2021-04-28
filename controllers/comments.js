// const { response } = require("express");
const express = require("express");
const { Comments } = require("../models");

const router = express.Router();

const db = require("../models");

/* TODO
    - Create √
    - Read
    - Update
    - Delete
    */

// Index Route
router.get("/indexComments", function(req, res){
  db.Comments.find({}, function(err, foundComments){
    if (err) return res.send(err);

    const context = {Comments: foundComments};
    res.render("comments/indexComments", context);
  });
});

// Show Route
router.get("/showComments/:id", function (req, res) {
  db.Comments.findById(req.params.id, function (err, foundComment) { //
    if (err) return res.send(err);

    const context = { Comments: foundComment };
    res.render("comments/showComments", context);
  });
});


// 3) CREATE ROUTE COMMENTS (Presentational)
router.get("/createComments", function(req, res){
      res.render("comments/createComments");
    });
  
// 3) CREATE ROUTE COMMENTS (Functional)
router.post("/createComments", function (req, res) {
  console.log(req.body);
  db.Comments.create(req.body, function (err) {
    if (err) return res.send(err);
    
    return res.redirect("indexComments");
  });
});

// // Edit Comments Route (presentational)
router.get("/editComments/:id", function(req, res){
  db.Comments.findById(req.params.id, function (err, foundComment) { //
    if (err) return res.send(err);

    const context = { Comments: foundComment };
  res.render("comments/editComments", context);
  });
});

// Update Route (Functional)
router.put("/editComments/:id", function (req, res) {
	db.Comments.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
        body: req.body
			},
		},
		{ new: true },
		function (err, updatedComments) {
			if (err) return res.send(err);
			return res.redirect("comments/indexComments/:id");
		}
	);
});

// Delete Route (Functional)
router.delete("/showComments/:id", function (req, res) {
	db.Comments.findByIdAndDelete(req.params.id, function (err, deletedComment) {
		if (err) return res.send(err);

		return res.redirect("/showComments");
	});
});

// == Start of non mongoose == //
// router.get("/editComments", function(request, response){
//   const context = {
//     Comments: db.Comments,
//   };
//   response.render("comments/editComments", context);
//   // response.send("edit page");
// });

// // Update Comments Route (Functional)
// // "Cannot PUT /comments/indexComments/" line in .ejs file has comment on it
// router.put("/editComments", function(request, response) {
//   const index = request.params.index;
//   const newComment = request.body;
//   const commentEdit = db.Comments.find(function(foundComment) {
//       if(foundComment.index == index) {
//           foundComment.name = newComment.name;
//           foundComment.comment = newComment.comment;
//           return foundComment;
//       };

//   });
//   const context = {
//       Comments: commentEdit
//   };
//   response.render("comments/indexComments", context);
// });
// == End of non mongoose == //

// Comments Index Route
// NOTE Do we need an index of comments from the User?
// router.get("/", function(req, res){
//     db.Comments.find({}, function (err, allComments){
//         if (err) return res.send(err);

//         const context = {comments: allComments};
//         return res.render("/", context);
//     });
// });


// New Comment Route
// // Show Comments Route
// // NOTE popultaing the article page with comments?
// router.get("/", function(req,res){
//     db.Comments.findById(req.params.id)
//         .populate("comments")
//         .exec(function (err, foundComments){
//             if(err) return res.send(err);

//             const context = {comments: foundComments};
//             return res.render("/", context);
//         });
// });

// Delete Comments Route 


module.exports = router;