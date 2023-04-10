const express = require("express")
const TrackRouter = express.Router();
const Track = require("../model/TrackSchema")
const uuid = require("uuid")
const unique_id = uuid.v4();

//create data
TrackRouter.post("/track" ,async(req,res)=>{
    try{
        let data = new Track({_id:unique_id,...req.body})
        let createData = await data.save();
        res.send(createData)
    }catch(err){
     res.status(400).send(err.message)
    }
})

// get all data
TrackRouter.get("/track" , async(req,res)=>{
    try{
     let readData= await Track.find();
     res.send(readData);
    }catch(err){
        res.status(400).send(err.message)
    }
})

// get data by id
TrackRouter.get("/track/:id" , async (req,res)=>{
    try{
       let _id=req.params.id;
       let getData = await Track.find({_id:_id})
       res.send(getData)
    }catch(err){
        res.status(400).send(err.message)
    }
})


// update data
TrackRouter.put("/track/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let updateData =  await Track.findByIdAndUpdate(_id , req.body , {new:true})
        res.send(updateData)
    }catch(err){
        res.status(400).send(err.message)
    }
});

// Delete Data
TrackRouter.delete("/track/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let deleteData =  await Track.findByIdAndDelete(_id)
        res.send(deleteData)
    }catch(err){
        res.status(400).send(err.message)
    }
})
module.exports=TrackRouter