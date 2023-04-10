const mongoose = require("mongoose")



const FavoritesSchema = mongoose.Schema({
    artists:{
        type:String,
      
    },
    albums:{
        type:String
    },
    tracks:{
        type:Number
    }
})

const Favorites = new mongoose.model("Favorites" , FavoritesSchema)

module.exports=Favorites;