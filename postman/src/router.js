const express =require("express");
 const app=express();
 require("./db/conn")
const Student =require('./models/student')
const StudentRouter=require("./router/student");

const port =process.env.PORT || 8000;
  app.use(express.json()); 
// to register the router

app.use(StudentRouter);


// lisstening from port

app.listen(port,()=>{
    console.log(`listening form the ${port} ....`)
})