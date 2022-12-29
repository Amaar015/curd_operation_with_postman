const mongoose=require('mongoose');
const url ="mongodb://127.0.0.1:27017/Students_api";

mongoose.set('strictQuery', false);
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection created successfuly ...")
}).catch((err)=>{
    console.log(`${err} occurs`)
})
