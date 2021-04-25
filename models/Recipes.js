const mongoose = require("mongoose");

const articleSchema = new mongoose (
    {
        body: {type: String, required: true}
    },
    {
        timmestamps: true,
    }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Articles;