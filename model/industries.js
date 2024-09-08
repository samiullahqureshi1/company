import mongoose from 'mongoose';
const industrySchema=new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    }
})

export const industryModel=mongoose.model('industries',industrySchema)