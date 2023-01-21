 

const express =require('express')
const User=require('./backends/models')
const multer=require('multer')
const path =require('path');
const fs= require('fs');
const router=new express.Router();
// define a express router

var storage= multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'public/backend/image')
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + '-'+ Date.now())
    }
});

var upload=multer({
    storage:storage
});
//  create a new student
 
router.post("/add",upload.single('image'),async(req,res)=>{
                   
    try{     
    const user=new User({
    name:req.body.name,
    email:req.body.email,
    Phone:req.body.phone,
    image:req.file.filename
    });
    // user.save();
    user.save((err)=>{
    if(err){
         res.json({message:err.message, type:"danger"});

    }else{
   req.session.message={
    type:"success",
    message:"User registered Successfully",
   }
  
    // console.log(message.type);
    res.redirect("/");
     }
    //  console.log(message.type);
    });
                             
            }catch(err){
                    console.log(err);
                    }
       
    })

// Uploads Images

router.get("/",(req,res)=>{
    res.render('index');
})

router.get("/add",(req,res)=>{
        res.render('add') 
})

// export module
module.exports=router;