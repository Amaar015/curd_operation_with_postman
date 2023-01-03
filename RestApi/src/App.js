const { response } = require('express');
const express=require('express');
const app=express();
require("./db/conn");
const player=require('./models/men.js')

const port =process.env.PORT || 8000;


app.get('/', async(req,res)=>{
      res.send('hello from the home page')
})

app.listen(port,()=>{
    console.log(`listening from the  no of port ${port}`)
})