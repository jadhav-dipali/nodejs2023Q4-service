const express = require("express")
const ArtistRouter = express.Router();
const Artist = require("../model/ArtistSchema")
const uuid = require("uuid")
const unique_id = uuid.v4();
const Album = require("../model/AlbumSchema")
const Track = require("../model/TrackSchema");

// create data
ArtistRouter.post("/artist" ,async(req,res)=>{
    try{
        let data = new Artist({_id:unique_id,...req.body})
        let createData = await data.save();
        res.send(createData)
    }catch(err){
     res.status(400).send(err.message)
    }
})

// get all data
ArtistRouter.get("/artist" , async(req,res)=>{
    try{
     let readData= await Artist.find();
     res.send(readData);
    }catch(err){
        res.status(400).send(err.message)
    }
})

// get data by id
ArtistRouter.get("/artist/:id" , async (req,res)=>{
    try{
       let _id=req.params.id;
       let getData = await Artist.find({_id:_id})
       res.send(getData)
    }catch(err){
        res.status(400).send(err.message)
    }
})


// update data
ArtistRouter.put("/artist/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let updateData =  await Artist.findByIdAndUpdate(_id , req.body , {new:true})
        res.send(updateData)
    }catch(err){
        res.status(400).send(err.message)
    }
});

// Delete Data
ArtistRouter.delete("/artist/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        // let findAlbumup=await Album.findByIdAndUpdate({artistId:_id},{artistId:null})
        // console.log(findAlbumup)
       
        let updateAlbum= await Album.updateMany({artistId:_id},{artistId:null})
        let updateTrack = await Track.updateMany({artistId:_id},{artistId:null})


        console.log(updateAlbum)    
        console.log(updateTrack)

        let deleteData =  await Artist.findByIdAndDelete(_id)
        res.send(deleteData)
    }catch(err){
        res.status(400).send(err.message)
    }
})
module.exports=ArtistRouter