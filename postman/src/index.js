const express =require("express");
 const app=express();
 require("./db/conn")
const Student =require('./models/student')
 const port =process.env.PORT || 8000;
  app.use(express.json()); 
//  create a new student

app.post("/students",async(req,res)=>{
  try{ 
    const user =new Student(req.body);
    const createUser=await user.save();
    res.status(201).send(createUser)

  }catch(e){
    res.status(400).send(e);
  }
  
})
 app.listen(port,()=>{
     console.log(`listening form the ${port} ....`)
 })
