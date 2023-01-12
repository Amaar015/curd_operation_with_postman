

const express =require('express')
const User=require('./backend/models')
const multer=require('multer')
const path =require('path');
// create a express router
const router=new express.Router();
// define a express router

//  create a new student

// Uploads Images
var storage=multer.diskStorage({
        destination:'public/backend/image',
        filename:(req,file,cb)=>{
                console.log(file);
                cb(null,file.originalname);
        },
})
var upload=multer({
        storage:storage
        })

        router.post("/add",upload.single('image'),async(req,res)=>{
                   
                // const Insert=async()=>{
                        try{     
                        const user=new User({
                          name:req.body.name,
                email:req.body.email,
                Phone:req.body.phone,
                image:req.file.filename
                    
                                })
                                const result=await User.insertMany([user]);
                                console.log(result);
                                }catch(err){
                                console.log(err);
                                }
                //     }
                //      Insert();
                 


                
        })

        
        
router.get("/",async(req,res)=>{
       
        const results =await User.find();
        res.render('index',{
                image:'backend/image/'+results[10].image});
        console.log(results[10].image);
        
})


router.get("/add",(req,res)=>{
        res.render('add') 
})

router.get("/update",(req,res)=>{
        res.send('Update user') 
})

// export module
module.exports=router;