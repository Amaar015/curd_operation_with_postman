const mongoose=require("mongoose");
const validator=require("validator")


const StudentSchema=new mongoose.Schema({
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
        type:Number,
        min:11,
        max:11,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true
    }
    
})

// create a new collection 

const Student=new mongoose.mongoose.model("Student",StudentSchema);

module.exports=Student;