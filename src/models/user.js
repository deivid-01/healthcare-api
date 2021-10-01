const mongoose=require('mongoose');

const{ Schema } = mongoose;

const UserSchema = new Schema({
    
    username:{type: String,required:true},
    email:{type: String,required:true},
    password:{ type: String,required:true},
    fullName:{type:String, required: true},
    height: {type:Number,required:true}, 
    weight: {type:Number,required:true},
    gender: {type:String,required:true},
    physicalActivity: {type:String,required:true},
})

module.exports = mongoose.model('User',UserSchema);