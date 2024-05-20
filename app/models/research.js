const mongoose=require('mongoose')

const researchSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image: { type: String, required: true },
    price:{type:Number
        
        ,required:true},
    completion_time: { type: String, required: true }
})

module.exports=mongoose.model("Research",researchSchema)