

const express =require('express')
const User=require('../models/model')
// create a express router
const router=new express.Router();
// define a express router

//  create a new student

router.get("/",(req,res)=>{
        res.render('index'); 
})


router.get("/add",(req,res)=>{
        res.render('add') 
})

router.get("/update",(req,res)=>{
        res.send('Update user') 
})

// export module
module.exports=router;