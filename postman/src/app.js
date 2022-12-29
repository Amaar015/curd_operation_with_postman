const express =require("express");
 const app=express();
 require("./db/conn")
const Student =require('./models/student')
 const port =process.env.PORT || 8000;
 
//  create a new student

app.post("/",(req,res)=>{
     res.send('hello form app.js')
 })
 app.listen(port,()=>{
     console.log(`listening form the ${port} ....`)
 })