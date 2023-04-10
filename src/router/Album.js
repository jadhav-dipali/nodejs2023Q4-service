const express = require("express")
const AlbumRouter = new express.Router()
const Album = require("../model/AlbumSchema")
const uuid = require("uuid")
const unique_id = uuid.v4();

// create data
AlbumRouter.post("/album" ,async(req,res)=>{
    try{
        let data = new Album({_id:unique_id,...req.body})
        let createData = await data.save();
        res.send(createData)
    }catch(err){
     res.status(400).send(err.message)
    }
})

// get all data
AlbumRouter.get("/album" , async(req,res)=>{
    try{
     let readData= await Album.find();
     res.send(readData);
    }catch(err){
        res.status(400).send(err.message)
    }
})

// get data by id
AlbumRouter.get("/album/:id" , async (req,res)=>{
    try{
       let _id=req.params.id;
       let getData = await Album.find({_id:_id})
       res.send(getData)
    }catch(err){
        res.status(400).send(err.message)
    }
})


// update data
AlbumRouter.put("/album/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let updateData =  await Album.findByIdAndUpdate(_id , req.body , {new:true})
        res.send(updateData)
    }catch(err){
        res.status(400).send(err.message)
    }
});

// Delete Data
AlbumRouter.delete("/album/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let deleteData =  await Album.findByIdAndDelete(_id)
        res.send(deleteData)
    }catch(err){
        res.status(400).send(err.message)
    }
})
module.exports=AlbumRouter
