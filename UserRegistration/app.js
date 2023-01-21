const express= require('express');
const path=require('path')
const app=express();
const port =process.env.PORT || 3000;
const hbs=require('hbs');
const UserRouter= require('./public/router/route')
// database connection
require("./public/router/backends/conn")
// require the database schema
const User=require('./public/router/backends/models');
const session = require('express-session');
// use to resolve the json formate
app.use(express.json())
// use to get the html value from inputs
app.use(express.urlencoded({extended:false}))
app.use(
    session({
        secret:"my secrete key",
        saveUninitialized:true,
        resave:false
    })
)
app.use((req,res,next)=>{
    res.locals.message=req.session.message;
    delete req.session.message;
    next();
})
// select the path values
console.log(__dirname);
const templatePath=path.join(__dirname,'public/template/views')
const partialsPath=path.join(__dirname,'public/template/partials');
const static_path=path.join(__dirname,'public')
app.use(express.static(static_path))
//  to set view engine
app.set('view engine','hbs');
// to register the partials
hbs.registerPartials(partialsPath);
app.set('views',templatePath);
 
app.use(UserRouter)

app.listen(port,()=>{
    console.log(`listening from the port no ${port} ......`)
})