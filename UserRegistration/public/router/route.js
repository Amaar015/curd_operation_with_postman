 

const express =require('express')
const User=require('./backends/models')
const multer=require('multer')
const path =require('path');
const fs= require('fs');
const router=new express.Router();
// define a express router

//  create a new student
 
// Uploads Images

router.get("/",(req,res)=>{
    res.render('index');
})

router.get("/add",(req,res)=>{
        res.render('add') 
})

// export module
module.exports=router;