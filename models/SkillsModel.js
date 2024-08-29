const mongoose=require("mongoose");
const { Schema } = mongoose;
const SkillSchema = new Schema({
title:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
progress:{
    type:Number,
    required:true
}



})

const Skill=mongoose.model('SKill',SkillSchema)


module.exports=Skill;