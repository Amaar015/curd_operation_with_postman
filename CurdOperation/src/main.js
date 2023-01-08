
// require('dotenv').config();
const express=require('express');
const mongoose=require("mongoose");
const express_session=require('express-session');
const session = require('express-session');


require('./db/conn');
const app=express();
const port=process.env.PORT|| 4000;

// midleware
app.use(express.json());
app.use(session({
    secret:"my secret key",
    saveUninitialized:true,
    resave:false
}))

app.use((req,res,next)=>{
    res.locals.message=req.session.message;
    delete req.session.message;
    next();
})
app.use("view engine", 'hbs')

app.use("", require('./routers/routes'))
// app.get('/',(req,res)=>{
//     res.send("hello from index page")

// })
app.listen(port,()=>{
    console.log(`Listening from the http://localhost:${port}`)
})


// to install dependancies in file
// npm i express mongoose express-session ejs multer dotenv