const express = require("express")
const FavoritesRouter = new express.Router();
const Favorites = require("../model/FavoritesSchema")


FavoritesRouter.post("/favorites" ,async(req,res)=>{
    try{
        let data = new Favorites(req.body)
        let createData = await data.save();
        res.send(createData)
    }catch(err){
     res.status(400).send(err.message)
    }
})

// get all data
FavoritesRouter.get("/favorites" , async(req,res)=>{
    try{
     let readData= await Favorites.find();
     res.send(readData);
    }catch(err){
        res.status(400).send(err.message)
    }
})

// get data by id
FavoritesRouter.get("/favorites/:id" , async (req,res)=>{
    try{
       let _id=req.params.id;
       let getData = await Favorites.find({_id:_id})
       res.send(getData)
    }catch(err){
        res.status(400).send(err.message)
    }
})


// update data
FavoritesRouter.put("/favorites/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let updateData =  await Favorites.findByIdAndUpdate(_id , req.body , {new:true})
        res.send(updateData)
    }catch(err){
        res.status(400).send(err.message)
    }
});

// Delete Data
FavoritesRouter.delete("/favorites/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let deleteData =  await Favorites.findByIdAndDelete(_id)
        res.send(deleteData)
    }catch(err){
        res.status(400).send(err.message)
    }
})
module.exports=FavoritesRouter