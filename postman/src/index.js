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
 


//  throgh get methode

app.get("/students",async(req,res)=>{
     try{
      const stduentData= await Student.find();
      res.send(stduentData);     
    }catch(err){
       res.send(err);
    }
})



// lisstening from port

app.listen(port,()=>{
    console.log(`listening form the ${port} ....`)
})