const mongoose = require("mongoose")



const AlbumSchema = mongoose.Schema({
    _id:{
        type:String,
       
    },
    name:{
        type:String
    },
    year:{
        type:Number
    },
    artistId:{
        type:Number
    }
})

const Album = new mongoose.model("Album" , AlbumSchema)

module.exports=Album;