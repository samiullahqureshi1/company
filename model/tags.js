import mongoose from 'mongoose'
const tagSchema=new mongoose.Schema({
    name:{
        type:String
    },
    tagId:{
        type:String
   }
})

export const tagModel=mongoose.model('tags',tagSchema)