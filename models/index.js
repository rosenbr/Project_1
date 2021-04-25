// const mongoose = require("mongoose");

// const dbUrl = "mongodb://localhost:27017/blogdb";

// mongoose
//     .connect(dbUrl, {
//         useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true,
// 		useFindAndModify: false,
//     })
//     .then(function(){
//         console.log("Mongodb connected");
//     })
//     .catch(function(err){
//         console.log("Mongodb error");
//         console.log(err);
//     });

//     monsgoose.connection.on("discconected",function(){
//         console.log("Mongodb disconnected");
//     });

    module.exports = {

        Recipes: require("./Recipes"),
        // User: require("./User"),
        // Comments: require("./Comments");

        Atricles: require("./Recipes"),
        User: require("./User"),
        Comments: require("./Comments")

        Atricles: require("./Recipes"),
        User: require("./User"),
        Comments: require("./Comments")

    };