const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        reqired:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    password:{
        type:String,
        reqired:true
    },
    is_online:{
        type:String,
        defalt:'0'
    }
},
{ timestamps:true }

);
module.exports=mongoose.model('User',userSchema);
