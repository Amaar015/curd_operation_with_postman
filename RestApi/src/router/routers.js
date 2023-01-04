const express =require('express');
const router=new express.Router();

const Player=require('../models/men');


router.post('/racer',async(req,res)=>{
    try{
           const Post_Racer=new Player(req.body);
           const create_racer=await Post_Racer.save();
           res.status(201).send(create_racer);
           
    }catch(err){
     res.status(401).send(err);
    }
})

//    to get the values

router.get('/racer',async(req,res)=>{
 try{
       const Get_racer=await Player.find({}).sort({ranking:'asc'});
       res.status(201).send(Get_racer);
 }catch(er){
         res.status(401).send(er);
 }
})

//    to search specific values

router.get('/racer/:id',async(req,res)=>{
 try{
       const _id=req.params.id;
       const get1_racer=await Player.findById(_id);
       res.status(201).send(get1_racer);
 }catch(er){
         res.status(401).send(er);
 }
})

//    to Update  values

router.patch('/racer/:id',async(req,res)=>{
 try{
       const _id=req.params.id;
       const Update_racer=await Player.findByIdAndUpdate(_id,req.body,{
         new:true
       });
      
       res.status(201).send(Update_racer);
 }catch(er){
         res.status(401).send(er);
 }
})

// delete value from the database
router.delete('/racer/:id',async(req,res)=>{
 try{
       const _id=req.params.id;
       const delete_racer=await Player.findByIdAndDelete(_id)
       res.status(201).send(delete_racer);
 }catch(er){
         res.status(401).send(er);
 }
})

module.exports=router;