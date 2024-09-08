import mongoose from 'mongoose'
const bloodGroupSchema=new mongoose.Schema({
    bloodGroupName:{
        type:String
    },
    status:{
        type:String
    },
    quantity:{
        type:Number,
    },
    bloodBankId: {
        type: mongoose.Schema.Types.ObjectId,
        
      }
})

export const bloodGroupModel=mongoose.model('bloodGroups',bloodGroupSchema)