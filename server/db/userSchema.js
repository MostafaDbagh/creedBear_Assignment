
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        user_id:{type:Number,required:true},
       email:{type:String ,required:true},
       first_name:{type:String,required:true},
       last_name:{type:String,required:true},
       avatar:{type:String,required:true}
     
    }
)

module.exports=mongoose.model('Testusers',UserSchema)