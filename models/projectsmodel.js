const mongoose=require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;
const porojectsSchema = new Schema({


id:{
type:String,
required:true

},

    projectTitle:{
    type:String,
    required:true
},

    image:{   type:String,
        required:true
    },
     
    projectTitle:{
        type:String,
        required:true
    },
    projectTools:{
        type:String,
        required:true
    },
    projectDescription:{
        type:String,
        required:true
    },
    projectLink:{
        type:String,
        required:true
    },
    detail:{
        type:Boolean,
        default:false
    }


}
)
const projects=mongoose.model('porojects',porojectsSchema)


module.exports=projects;