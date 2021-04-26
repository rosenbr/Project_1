const express = require("express");

const router = express.Router();

const db = require("../models");

/* TODO
    - Create
    - Read
    - Update
    - Delete
    */
   // TODO update url pathways when they are ready

// 2) SHOW ROUTE COMMENTS
router.get("/showComments/:index", function (request, response) {
    const context = {
      Comments: db.Comments[request.params.index],
    };
    response.render("comments/showComments", context);
  });

// 3) CREATE ROUTE COMMENTS
router.get("/createComments", function(request, response){
    response.render("comments/createComments");
  });

// 4) CREATE ROUTE COMMENTS
router.post("/createComments", function(request, respond){
    let commentBody = request.body;
    db.Comments.push(commentBody);
    respond.redirect("/");
  });
  
// Show Route
/* router.get("/showComments/:index", function (request, response) {
    const context = {
      Comments: db.Comments[request.params.index],
    };
    response.render("comments/showComments", context);
  }); */


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


// // Create Comment Route
// router.post("/", function(req, res){
//     db.Comments.findById(req.params.id, function(err, foundComments){
//         if(err) return res.send(err);

//         return res.redirect("/");
//     });
// });

// // Edit Comments Route (presentational)
// router.get("/", function(req, res){
//     db.Comments.findById(req.params.id, function(err, foundComments){
//         if(err) return res.send(err);

//         const context = {comments: foundComments};
//         return res.render("/", context);
//     });
// });

// // Update Comments Route
// router.put("/", function(req, res){
//     db.Comments.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set: {
//                 ...req.body,
//             },
//         },
//         {new: true},
//         function(err, updateComments){
//             if(err) return res.send(err);
//             return res.redirect("/");
//         }
//     );
// });

// Delete Comments Route 


module.exports = router;