

const express =require('express')
const Student=require('../models/student')
// create a express router
const router=new express.Router();
// define a express router

//  create a new student

router.post("/students",(req,res)=>{
    console.log(req.body);
    const user= new Student(req.body)
   user.save().then(()=>{
      res.status(201).send(user);
   }).catch((err)=>{
       res.status(400).send(err);
   });
//    return  res.send('hello form students ')
})

// Show Api json data fatch from database
router.get("/students",async(req,res)=>{
    try{
     const stduentData= await Student.find();
     res.send(stduentData);     
   }catch(err){
      res.send(err);
   }
})


// Show Api json data update(by the use of findByIdAndUpdate()) from database

router.patch('/students/:name1',async (req,res)=>{
    try{
        const id=req.params.id;
        const UpdateStudent=await Student.findByIdAndUpdate(name1,req.body,{
            new:true
        });
        if(!name1){
          res.status(404).send('Student Dose not exist')
        }             
        return res.status(201).send(UpdateStudent);
    }catch(err){
     res.status(401).send(err)
      
    }
})
// Show Api json data delete(by the use of delete()) from database

router.delete('/students/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const deleteStudent=await Student.findByIdAndDelete(id);
        if(!id){
          res.status(404).send('Student Dose not exist')
        }             
        return res.status(201).send(deleteStudent);
    }catch(err){
     res.status(401).send(err)
      // console.log(`error is ${err}`)
    }
})

// export module
module.exports=router;