const express =require("express");
 const app=express();
 require("./db/conn")
const Student =require('./models/student')
 const port =process.env.PORT || 8000;
  app.use(express.json()); 
//  create a new student

app.post("/students",(req,res)=>{
     console.log(req.body);
     const user= new Student(req.body)
    user.save().then(()=>{
       res.status(201).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    });
//    return  res.send('hello form students ')
 })
 app.listen(port,()=>{
     console.log(`listening form the ${port} ....`)
 })