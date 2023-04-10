const mongoose = require("mongoose")

const TrackSchema = mongoose.Schema({
    _id:{
        type:String,
    },
    name:{
        type:String
    },
    artistId:{
        type:String
    },
    albumId:{
        type:String
    },
    duration:{
        type:Number
    }
})

const Track = new mongoose.model("Track" , TrackSchema)

module.exports=Track;