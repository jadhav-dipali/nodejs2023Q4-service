const mongoose = require("mongoose")



const ArtistSchema = mongoose.Schema({
    _id:{
        type:String,
     
    },
    name:{
        type:String
    },
    grammy:{
        type:Boolean
    }
})

const Artist = new mongoose.model("Artist" , ArtistSchema)

module.exports=Artist;