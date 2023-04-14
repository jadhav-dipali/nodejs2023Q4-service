const mongoose = require("mongoose")



const FavoritesSchema = mongoose.Schema({
    _id:{
        type:String,
    },
    artists:{
        type:[String],
      
    },
    albums:{
        type:[String]
    },
    tracks:{
        type:[String]
    }
})

const Favorites = new mongoose.model("Favorites" , FavoritesSchema)

module.exports=Favorites;