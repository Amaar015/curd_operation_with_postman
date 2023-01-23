 

const express =require('express')
const User=require('./backends/models')
const multer=require('multer')
const path =require('path');
const fs= require('fs');
const router=new express.Router();
// define a express router





// Image and user added to the database
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
    user.save((err)=>{
    if(err){
         res.json({message:err.message, type:"danger"});
    }else{
    req.session.message={
         type:"success",
         message:"User registered Successfully",
         }
        res.redirect("/");
        }
        });
                             
            }catch(err){
                    console.log(err);
                    }
       
    })


// get user data using get methode
router.get("/",(req,res)=>{
       User.find().exec((err,users)=>{
    if(err){
          res.json({message:err.message });

   }else{
      res.render('index',{
        num:0,
        users:users,
        
      })
   }
  });
})

// go to the register form 
router.get("/add",(req,res)=>{
        res.render('add') 
})


// for update to get  the User Data

router.get('/edit/:id',(req,res)=>{
         let id=req.params.id;
         User.findById(id,(err,user)=>{
            if(err){
                res.redirect('/');
                console.log(err)
            }
             else{
                if(user == null){
                     res.redirect('/')
                }
                else{
                    res.render('edit_user',{
                        user:user,
                    })
                 }
             }
         })
})

// update User Throuhg post methode
     router.post('/update/:id',upload.single('new_image'),(req,res)=>{
        let id=req.params.id;
        let new_image="";
        if(req.file){
            new_image=req.file.filename;
            try{
                   fs.unlinkSync('public/backend/image/'+req.body.old_image);
            }catch(err){
                console.log(err);
            }
        }else{
            new_image=req.body.old_image;
        }

        User.findByIdAndUpdate(id,{
            name:req.body.name,
            email:req.body.email,
            Phone:req.body.phone,
            image:new_image,
        },(err,result)=>{
            if(err){
            res.json({message: err.message, type:"danger"});
        }else{
              req.session.message={
                type:"success",
                message:"user Updated successfully ....!"
              }
              res.redirect('/')
        }
    })
     })

    //  to delete any user form the datbase
       router.get('/delete/:id',(req,res)=>{
        let id=req.params.id;
        User.findByIdAndRemove(id,(err,result)=>{
            if(result.image !=""){
                try{
                    // console.log(result.image);
                         fs.unlinkSync("public/backend/image/"+result.image);
                }catch(err){
                    console.log(err);
                }
            }
            if(err){
                res.json({message:err.message});
            }else{
                req.session.message={
                    type:"info",
                    message:'User Deleted successfully!',
                }
                res.redirect('/');
            }
        })
       })
// export module
module.exports=router;