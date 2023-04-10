const express = require("express")
const User = require("../model/UserSchema")
const UserRouter = new express.Router();
const bcrypt = require("bcrypt");
const uuid = require("uuid")
const unique_id = uuid.v4();
// create data
UserRouter.post("/user" ,async(req,res)=>{
    try{
        let strongPass = bcrypt.hash(req.body.password ,10)
        let data = new User({
            _id:unique_id,
            password:strongPass,
            login:req.body.login
        })
        let createData = await data.save();
        res.send(createData)
    }catch(err){
     res.status(400).send(err.message)
    }
})

// get all data
UserRouter.get("/user" , async(req,res)=>{
    try{
     let readData= await User.find();
     res.send(readData);
    }catch(err){
        res.status(400).send(err.message)
    }
})

// get data by id
UserRouter.get("/user/:id" , async (req,res)=>{
    try{
       let _id=req.params.id;
       let getData = await User.find({_id:_id})
       res.send(getData)
    }catch(err){
        res.status(400).send(err.message)
    }
})


// update data
UserRouter.put("/user/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let updateData =  await User.findByIdAndUpdate(_id , req.body , {new:true})
        res.send(updateData)
    }catch(err){
        res.status(400).send(err.message)
    }
});

// Delete Data
UserRouter.delete("/user/:id" , async(req,res)=>{
    try{
        let _id = req.params.id;
        let deleteData =  await User.findByIdAndDelete(_id)
        res.send(deleteData)
    }catch(err){
        res.status(400).send(err.message)
    }
})
module.exports=UserRouter