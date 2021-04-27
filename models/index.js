require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.MONGODB_URI;

mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
    })
    .then(function(){
        console.log("Mongodb connected");
    })
    .catch(function(err){
        console.log("Mongodb error");
        console.log(err);
    });

    mongoose.connection.on("discconected",function(){
        console.log("Mongodb disconnected");
    }); 

    module.exports = {
        Recipes: require("./Recipes"),
        User: require("./User"),
        Comments: require("./Comments"), //uncommented out this line to get the comments link to take user to comments
    };