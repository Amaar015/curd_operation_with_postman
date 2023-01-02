const express =require("express");
 const app=express();
 require("./db/conn")
const Student =require('./models/student')
 const port =process.env.PORT || 8000;
  app.use(express.json()); 

// delete the document 

app.delete('/students/:id',async (req,res)=>{
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

// lisstening from port

app.listen(port,()=>{
    console.log(`listening form the ${port} ....`)
})



//  create a new student

// app.post("/students",async(req,res)=>{
//     try{ 
//       const user =new Student(req.body);
//       const createUser=await user.save();
//       res.status(201).send(createUser)
  
//     }catch(e){
//       res.status(400).send(e);
//     }
    
//   })
   
  
  
  //  throgh get methode
  
//   app.get("/students",async(req,res)=>{
//        try{
//         const stduentData= await Student.find();
//         res.send(stduentData);     
//       }catch(err){
//          res.send(err);
//       }
//   })