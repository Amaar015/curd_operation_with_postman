const express =require("express");
 const app=express();
 require("./db/conn")
const Student =require('./models/student')
 const port =process.env.PORT || 8000;
  app.use(express.json()); 

// update the document 

app.patch('/students/:name1',async (req,res)=>{
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

// lisstening from port

app.listen(port,()=>{
    console.log(`listening form the ${port} ....`)
})


