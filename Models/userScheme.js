const mongoose = require('mongoose')
const validator = require('validator')

// schme=structure of the document
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3,'must be at least 3, got {VALUE}']
    },
    email:{
        type:String,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email")
        }
    }
},
password:{
    type: String
},
github:{
    type:String
},
profile:{
    type: String
}
})

const users = mongoose.model("users",userSchema)

module.exports = users