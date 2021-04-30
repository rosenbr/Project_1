const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema (
    {
        name: {type: String, required: true},
        img: {type: String, required: true},
        descriptions: {type: String, required: true},
        ingredients: {type: String, required: true},
        directions: {type: String, required: true},
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comments"}]
    },
    {
        timestamps: true,
    }
);

const Recipes = mongoose.model("Recipes", recipesSchema);


module.exports = Recipes;



