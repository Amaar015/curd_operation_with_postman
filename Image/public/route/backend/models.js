const mongoose=require("mongoose");
const validator=require("validator")


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is already present! please enter new email Id"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
        },
    Phone:{
        type:String,
        // min:11,
        // max:11,
        required:true,
        // unique:true,
    },
   image:{
       type:String,
       required:true
   },
   Created:{
    type:Date,
    required:true,
    default:Date.now, 
   }

    
})

// create a new collection 

const User=new mongoose.mongoose.model("User",UserSchema);

module.exports=User;