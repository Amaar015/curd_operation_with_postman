const { response } = require('express');
const express=require('express');
const Player = require('./models/men.js');
const app=express();
require("./db/conn");
// const player=require('./models/men.js');
const router = require('./router/routers.js');

const port =process.env.PORT || 8000;
 
// store the data
 app.use(express.json());
   
// use the router

app.use(router);

app.listen(port,()=>{
    console.log(`listening from the  no of port ${port}`)
})