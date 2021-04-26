const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
    {
        body: {type: String, required: true, min: 10, max: 140}
    },
    {
        timestamps: true,
    }
);

const Comments = mongoose.model("Comments", commentsSchema);

/* const Comments = [
    {user: "bob", comment: "food and stuff and things",},
    {user: "sally", comment: "this is the best thing ever"},
    {user: "tiffany", comment: "i love you and your work"},
] */
module.exports = Comments;