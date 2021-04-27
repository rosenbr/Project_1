// const { response } = require("express");
const express = require("express");

const router = express.Router();

const db = require("../models");

/* TODO
    - Create
    - Read
    - Update
    - Delete
    */

// Index Route
router.get("/showRecipes", function(req, res){
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
});

// == Start of non mongoose == //
// // Edit Comments Route (presentational)
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


// router.put("/editComments", function(request, response){
//     db.Comments.findByIndexAndUpdate(
//         request.params.index,
//         {
//             $set: {
//                 ...request.body,
//             },
//         },
//         {new: true},
//         function(err, updateComments){
//             if(err) return response.send(err);
//             return response.redirect("comments/indexComments");
//         }
//     );
// });

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