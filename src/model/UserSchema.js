const mongoose = require("mongoose")



const UserSchema = mongoose.Schema({
    _id:{
        type:String,
      
    },
    login:{
        type:String
    },
    password:{
        type:String
    },

},
{
    timestamps:true
}

)

const User = new mongoose.model("User" , UserSchema)

module.exports=User;