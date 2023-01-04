const express=require('express');
const mongoose = require('mongoose');


const UserSchema=new mongoose.Schema({
       ranking:{
        type:String,
        required:true,
        unique:true
       } ,
       name:{
        type:String,
        required:true,
        trim:true
       } ,
       dob:{
        type:Number,
       //  required:true,
        trim:true
       } ,
       country:{
        type:String,
        required:true,

       },
       score:{
        type:Number,
        required:true,
        unique:true
       } ,
       event:{
        type:String,
        default:"100m"
       }   

})



// create a new collection 

const Player=new mongoose.model("Player",UserSchema);

module.exports=Player;