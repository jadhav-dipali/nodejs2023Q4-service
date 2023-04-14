const express = require("express")
const FavoritesRouter = new express.Router();
const Favorites = require("../model/FavoritesSchema")
const defaultId="dmsklcmflermvlerm";


async function isFav(req,res,next){
    try{
        let user = await Favorites.findById(defaultId)
        if(!user){
          user= await new Favorites({
            _id:defaultId,
            artists:[],
            albums:[],
            tracks:[]
          })
          await user.save()
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
    next();
}

FavoritesRouter.get("/favs" , async(req,res)=>{
    try {
       let data =  await Favorites.find();
       res.status(200).json({message:"success",data}) 
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})


FavoritesRouter.post("/favs/track/:id" , isFav, async(req,res)=>{
    try {
        let user = await Favorites.findById(defaultId)
        if(user.tracks.find((a)=>{return (a===req.params.id)})===undefined){
            await Favorites.findByIdAndUpdate(defaultId,{$push:{tracks:req.params.id}}) 
            res.status(201).json({status:"Success" , message:"New track Add in Favorites"})
        }else{
            res.status(400).json({status : "fail" , message:"Id Already Add in Favorites" })
        }
       
        
    } catch (error) {
        res.status(400).send({message:error.message})
        
    }
})

FavoritesRouter.delete("/favs/track/:id" , async(req,res)=>{
    try {
        await Favorites.findByIdAndUpdate(defaultId,{$pull:{tracks:req.params.id}}) 
           res.status(201).json({status:"Success" , message:"Successfully Deleted track"})
    } catch (error) {
        res.status(400).send({message:error.message})  
    }
})


FavoritesRouter.post("/favs/artist/:id" ,isFav, async(req,res)=>{
    try {
        let user = await Favorites.findById(defaultId)
        if(user.artists.find((a)=>{return (a===req.params.id)})===undefined){
            await Favorites.findByIdAndUpdate(defaultId,{$push:{artists:req.params.id}}) 
            res.status(201).json({status:"Success" , message:"New Artists Add in Favorites"})
        }else{
            res.status(400).json({status : "fail" , message:"Id Already Add in Favorites" })
        }  
    } catch (error) {
        res.status(400).send({message:error.message})
        
    }
})

FavoritesRouter.delete("/favs/artist/:id" , async(req,res)=>{
    try {
        await Favorites.findByIdAndUpdate(defaultId,{$pull:{artists:req.params.id}}) 
           res.status(201).json({status:"Success" , message:"Successfully Deleted Artist"})
    } catch (error) {
        res.status(400).send({message:error.message})  
    }
})


FavoritesRouter.post("/favs/album/:id" ,isFav, async(req,res)=>{
    try {
      
        let user = await Favorites.findById(defaultId)
        if(user.albums.find((a)=>{return (a===req.params.id)})===undefined){
            await Favorites.findByIdAndUpdate(defaultId,{$push:{albums:req.params.id}}) 
            res.status(201).json({status:"Success" , message:"New Album Add in Favorites"}) 
        }else{
            res.status(400).json({status : "fail" , message:"Id Already Add in Favorites" })
        }  
           
    } catch (error) {
        res.status(400).send({message:error.message})
        
    }
})

FavoritesRouter.delete("/favs/album/:id" , async(req,res)=>{
    try {
        await Favorites.findByIdAndUpdate(defaultId,{$pull:{albums:req.params.id}}) 
           res.status(201).json({status:"Success" , message:"Successfully Deleted Album"})
    } catch (error) {
        res.status(400).send({message:error.message})  
    }
})



module.exports=FavoritesRouter