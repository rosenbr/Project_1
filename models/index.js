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
<<<<<<< HEAD
        Recipes: require("./Recipes"),
        // User: require("./User"),
        // Comments: require("./Comments");
=======
        Atricles: require("./Recipes"),
        User: require("./User"),
        Comments: require("./Comments")
>>>>>>> c8afd0dcc94ad2ba5c0c61a561d8d53c1e0b6ca8
    };