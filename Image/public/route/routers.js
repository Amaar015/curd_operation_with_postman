

const express =require('express')
const User=require('./backend/models')
const multer=require('multer')
const path =require('path');
// const { type } = require('os');
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
                   
                try{     
                const user=new User({
                name:req.body.name,
                email:req.body.email,
                Phone:req.body.phone,
                image:req.file.filename
                });
                user.save((err)=>{
                if(err){
                       res.json({message:err.message, type:"danger"})
                }else{
                req.session.message ={
                type:"success",
                message:"User added Successfuly",
                };
                
                 res.redirect("/");
                 }
                });
                                // const result=await User.insertMany([user]);
                                // console.log(result);
                                         
                        }catch(err){
                                console.log(err);
                                }
                //     }
                //      Insert();
                 


                
        })

        // get all users
        
router.get("/",(req,res)=>{
       
         User.find().exec((err,users)=>{
         if(err){
                res.json({message:err.message,type:"danger"});

         }else{
            res.render('',{
                Key:0,
                 users:users

            })
        // console.log(users);
         }
        });
//         res.render('index',{
//                 image:'backend/image/'+results[1].image});
//                 console.log(results[1].image);
                  
})


router.get("/add",(req,res)=>{
        res.render('add') 
})

router.get("/edit/:id",(req,res)=>{
         let id=req.params.id;
         User.findById(id,(err,user)=>{
                if(err){
                        res.redirect("/");
                }else{
                        if(user==null){
                        res.redirect("/");
                }else{
                    res.render("edit_user",{
                        title:"Edit user",
                        user:user,
                
                    })
                }
                }

         })
})

router.get("/delete",(req,res)=>{
        res.send('Update user') 
})
// export module
module.exports=router;