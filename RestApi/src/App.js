const { response } = require('express');
const express=require('express');
const Player = require('./models/men.js');
const app=express();
require("./db/conn");
const player=require('./models/men.js')

const port =process.env.PORT || 8000;
 
// store the data
 app.use(express.json());
   app.post('/Racer',async(req,res)=>{
       try{
              const Racer=await new Player(req.body);
              console.log(Racer)
              Racer.save();
       }catch(err){
        res.send(err);
       }
   })


app.listen(port,()=>{
    console.log(`listening from the  no of port ${port}`)
})