import mongoose from 'mongoose'
const patientSchema=new mongoose.Schema({
    patientName:{
        type:String
    },
    CNICNumber:{
        type:String
    },
    disease:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    status:{
        type:String
    },
    bloodGroup:{
        type:String
    }
})


export const patientModel=mongoose.model('patient',patientSchema)